# Security Toolbox

Free online security tools for bug bounty hunters and developers. Privacy-first — all processing happens client-side in your browser.

**→ https://replikantek.github.io/security-toolbox/**

## Tools (26)

### ⭐ Flagship
- **Web Auditor** — Full security audit: DNS, SSL/TLS, security headers (A+ grade), CORS, WAF, tech stack detection, cookie analysis, CSP deep evaluation, TTFB performance, HTTP methods, redirect chain. Generates PDF-ready report with prioritized recommendations.

### 🔍 Reconnaissance (6)
- **DNS Lookup** — A, AAAA, MX, NS, TXT, CNAME via DNS-over-HTTPS
- **Subdomain Scanner** — 500-word wordlist + DNS resolution
- **Port Scanner** — 38 common ports via HTTP/S probes
- **Takeover Checker** — Subdomain takeover detection (20+ services)
- **GraphQL Introspection** — Schema discovery (types, queries, mutations)
- **Web Auditor** — Full security audit (see Flagship)

### 📊 Analysis (9)
- **Web Auditor** — See flagship above
- **JWT Decoder** — Decode headers, payloads, claims
- **JWT Attacker** — alg:none, kid injection, secret cracking, algorithm confusion
- **Hash Identifier** — Identify 40+ hash types by pattern
- **CVE Search** — Search by ID or keyword via CIRCL API
- **CVSS Calculator** — v3.1 base score calculation
- **Cookie Analyzer** — Secure/HttpOnly/SameSite analysis
- **CSP Evaluator** — Deep Content-Security-Policy analysis
- **Email Security Checker** — SPF, DKIM, DMARC, BIMI analysis

### ⚙️ Developer Tools (5)
- **Regex Tester** — Live testing with security presets
- **Hex Converter** — Hex/dec/bin/ASCII/Base64 bidirectional
- **Token Counter** — LLM token estimation + cost calculator
- **Base64 Tool** — Encode/decode + auto-detect in text
- **URL Extractor** — Extract, parse, filter URLs from text

### 🔒 Crypto & Encoding (3)
- **Entropy Checker** — Shannon entropy + key strength
- **Hash Compare** — Multi-algorithm hash computation
- **JWT Playground** — Live JWT creation, signing, and verification

### 🧪 Testing & Payloads (3)
- **Payload Builder** — XSS, SQLi, SSTI, SSRF, traversal, CMD injection presets
- **CSRF Generator** — Generate CSRF PoC forms for testing
- **CSP Hash Generator** — Generate CSP hashes for inline scripts/styles

## Tech

Pure HTML/CSS/JS. No frameworks, no build tools, no tracking. All tools run client-side. DNS over HTTPS via Cloudflare. CVE data from CIRCL API. CORS proxy via allorigins.win.
