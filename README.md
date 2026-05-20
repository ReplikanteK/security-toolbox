# Security Toolbox

Free online security tools for bug bounty hunters and developers. Privacy-first — all processing happens client-side in your browser.

**→ https://replikantek.github.io/security-toolbox/**

## Tools (28)

### ⭐ Flagship
- **Web Auditor** — Full security audit: DNS, SSL/TLS, security headers (A+ grade), CORS, WAF, tech stack detection, cookie analysis, CSP deep evaluation, TTFB performance, HTTP methods, redirect chain. Generates PDF-ready report with prioritized recommendations.

### 🔍 Reconnaissance (9)
- **DNS Lookup** — A, AAAA, MX, NS, TXT, CNAME via DNS-over-HTTPS
- **HTTP Probe** — Status codes, security headers, HSTS/CSP analysis
- **Subdomain Scanner** — 500-word wordlist + DNS resolution
- **Port Scanner** — 38 common ports via HTTP/S probes
- **SSL/TLS Checker** — Certificate, HSTS, header analysis
- **Redirect Chain** — Open redirect detection, protocol downgrades
- **Takeover Checker** — Subdomain takeover detection (20+ services)
- **WAF Detector** — WAF/CDN fingerprinting
- **HTTP Methods** — Risky method detection (PUT, DELETE, TRACE)

### 📊 Analysis (11)
- **Web Auditor** — See flagship above
- **JWT Decoder** — Decode headers, payloads, claims
- **JWT Attacker** — alg:none, kid injection, secret cracking, algorithm confusion
- **Hash Identifier** — Identify 40+ hash types by pattern
- **CVE Search** — Search by ID or keyword via CIRCL API
- **CVSS Calculator** — v3.1 base score calculation
- **CORS Checker** — Origin reflection, credential misconfigs
- **Cookie Analyzer** — Secure/HttpOnly/SameSite analysis
- **GraphQL Introspection** — Schema discovery (types, queries, mutations)
- **Security Headers Grader** — A+ to F grading with breakdown
- **CSP Evaluator** — Deep Content-Security-Policy analysis

### ⚙️ Developer Tools (5)
- **Regex Tester** — Live testing with security presets
- **Hex Converter** — Hex/dec/bin/ASCII/Base64 bidirectional
- **Token Counter** — LLM token estimation + cost calculator
- **Base64 Tool** — Encode/decode + auto-detect in text
- **URL Extractor** — Extract, parse, filter URLs from text

### 🔒 Crypto & Encoding (2)
- **Entropy Checker** — Shannon entropy + key strength
- **Hash Compare** — Multi-algorithm hash computation

### 🧪 Testing & Payloads (1)
- **Payload Builder** — XSS, SQLi, SSTI, SSRF, traversal, CMD injection presets

## Tech

Pure HTML/CSS/JS. No frameworks, no build tools, no tracking. All tools run client-side. DNS over HTTPS via Cloudflare. CVE data from CIRCL API. CORS proxy via allorigins.win.
