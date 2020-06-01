# ntlmv2

> NTLM & NTLMv2 authentication / hash library for server / client

[![Github Version](https://img.shields.io/github/release/ardean/ntlmv2.svg)](https://github.com/ardean/ntlmv2)
[![NPM Version](https://img.shields.io/npm/v/ntlmv2.svg)](https://npmjs.org/package/ntlmv2)
[![NPM Downloads](https://img.shields.io/npm/dm/ntlmv2.svg)](https://npmjs.org/package/ntlmv2)
[![License](https://img.shields.io/npm/l/ntlmv2.svg)](LICENSE.md)

## Installation
```sh
$ npm i ntlmv2
```

## Features

### NTLM(v2)
- `parseMessageType`

- `serializeNegotiationMessage` / `parseNegotiationMessage`
- `serializeChallengeMessage` / `parseChallengeMessage`
- `serializeAuthenticationMessage` / `parseAuthenticationMessage`

- `generateServerChallenge`

- `matchPassword`
- `matchExtendedSessionSecurityPassword` (currently missing)
- `matchExtendedSessionSecurityPasswordV2`

- `createLmHash`
- `createNtHash`
- `createLmResponse`
- `createNtResponse`

- `createV2Hash` (createLmV2Hash & createNtV2Hash are the same)
- `createLmV2Response`
- `createNtV2Proof`

- `isExtendedSessionSecurityLmResponse`
- `isNtV2Response`

### Attribute Value Pairs (AV Pairs)
- `attributeValue`
  - `serializePairs` / `parsePairs`
  - `serializePair` / `parsePair`

- `AttributeValuePair` interface
- `AttributeValueId` enum

### NegotiateFlag (enum)

### MessageType (enum)

### Version (class)
- `WindowsXP`
- `Server2003`

## License

[MIT](LICENSE.md)