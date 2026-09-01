# Security Toolbox

Free online security tools for bug bounty hunters and developers. Privacy-first — all processing happens client-side in your browser.

**→ https://securitool.js.org/**

## Tools (26)

### ⭐ Flagship
- **Web Auditor** — Full security audit: DNS, email security (SPF/DKIM/DMARC), SRI, mixed content, form security, iframe analysis, base tag, HTML comments, tech stack detection. Generates PDF-ready report with prioritized recommendations.

### 🔍 Reconnaissance (4)
- **DNS Lookup** — A, AAAA, MX, NS, TXT, CNAME via DNS-over-HTTPS
- **Subdomain Scanner** — 500-word wordlist + DNS resolution
- **Port Scanner** — 38 common ports via HTTP/S probes
- **Takeover Checker** — Subdomain takeover detection (20+ services)

### 📊 Analysis (12)
- **Web Auditor** — See flagship above
- **Email Security Checker** — SPF, DKIM, DMARC, BIMI analysis
- **JWT Decoder** — Decode headers, payloads, claims
- **JWT Attacker** — alg:none, kid injection, secret cracking, algorithm confusion
- **JWT Playground** — Live JWT creation, signing, and verification
- **GraphQL Introspection** — Schema discovery (types, queries, mutations)
- **Hash Identifier** — Identify 40+ hash types by pattern
- **CVE Search** — Search by ID or keyword via CIRCL API
- **CVSS Calculator** — v3.1 base score calculation
- **Cookie Analyzer** — Secure/HttpOnly/SameSite analysis
- **CSP Evaluator** — Deep Content-Security-Policy analysis
- **CSP Hash Generator** — Generate CSP hashes for inline scripts/styles

### ⚙️ Developer Tools (6)
- **Regex Tester** — Live testing with security presets
- **Hex Converter** — Hex/dec/bin/ASCII/Base64 bidirectional
- **Token Counter** — LLM token estimation + cost calculator
- **Base64 Tool** — Encode/decode + auto-detect in text
- **URL Extractor** — Extract, parse, filter URLs from text
- **Policy Generator** — Generate CSP, CORS, HSTS headers

### 🔒 Crypto & Encoding (2)
- **Entropy Checker** — Shannon entropy + key strength
- **Hash Compare** — Multi-algorithm hash computation

### 🧪 Testing & Payloads (2)
- **Payload Builder** — XSS, SQLi, SSTI, SSRF, traversal, CMD injection presets
- **CSRF Generator** — Generate CSRF PoC forms for testing

## Tech

Pure HTML/CSS/JS. No frameworks, no build tools, privacy-first. All tools run client-side. Anonymous page views via GoatCounter (no cookies). DNS over HTTPS via Cloudflare. CVE data from CIRCL API. CORS proxy via allorigins.win.
