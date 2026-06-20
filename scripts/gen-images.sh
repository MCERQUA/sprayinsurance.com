#!/usr/bin/env bash
# Generate all images for sprayinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/sprayinsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 11 images — SPRAY CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a spray foam contractor in full protective gear applying closed-cell spray foam insulation to the underside of a commercial roof deck, bright industrial lighting, dramatic dark warehouse background with yellow safety equipment accents, professional industrial photography, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of an industrial construction site with spray coating contractors working on a large commercial roof, professional spray rigs and equipment visible below, dramatic high-energy industrial photography, dark background, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a professional spray contractor in clean work gear standing next to a spray foam proportioner rig, confident direct expression, industrial building background, warm natural light, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic shot of spray foam and polyurea contractors at work on a large commercial building — one crew applying spray foam insulation on a wall, another crew applying polyurea coating on the roof — dramatic industrial photography, dark high-energy background, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic close-up of a spray contractor in full PPE — respirator, coveralls, gloves — applying spray foam insulation with a professional spray gun, dramatic dark industrial background, bright LED work lighting, professional commercial photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of spray polyurea applicators in respirators and protective suits applying a grey polyurea coating on an industrial floor, bright LED lighting in dark industrial facility, professional photography showing proper chemical safety procedures, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of spray contractor crew in full safety PPE — respirators, tyvek suits, safety glasses, gloves — preparing spray foam equipment on a job site, high-energy industrial photography, dark dramatic background, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a professional spray foam proportioner truck — a large white work truck with spray foam equipment mounted in the bed — parked at a commercial job site with industrial buildings in background, clean dramatic photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of professional spray foam and polyurea equipment: a proportioner system, heated hose assemblies coiled on racks, spray guns hanging on a pegboard in a clean equipment shop, dramatic industrial lighting, dark background, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of a large commercial building under construction with multiple spray contractor crews working simultaneously — foam insulation on walls, polyurea coating on the roof — high aerial dramatic perspective, professional industrial photography, no text" 4

gen "inland-marine.jpg" \
  "Photorealistic photo of spray contractor equipment being loaded from a transport trailer onto a commercial job site — proportioner system, hoses, spray guns visible — professional logistics and equipment handling, industrial photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
