import chai from "chai";
import chaiBytes from "chai-bytes";
import ntlmv2, { NegotiateFlag } from "../src";

chai.use(chaiBytes);

const { assert } = chai;

const domain = "domain";
const hostname = "hostname";
const negotiateFlags = NegotiateFlag.Version;
const testBuffer = Buffer.from([0x4e, 0x54, 0x4c, 0x4d, 0x53, 0x53, 0x50, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x06, 0x00, 0x06, 0x00, 0x20, 0x00, 0x00, 0x00, 0x08, 0x00, 0x08, 0x00, 0x26, 0x00, 0x00, 0x00, 0x44, 0x4f, 0x4d, 0x41, 0x49, 0x4e, 0x48, 0x4f, 0x53, 0x54, 0x4e, 0x41, 0x4d, 0x45]);

describe("ntlmv2", () => {
  describe(`serializeNegotiationMessage(date: Date)`, () => {
    it("returns negotiation message buffer", () => {
      const buffer = ntlmv2.serializeNegotiationMessage(domain, hostname, negotiateFlags);
      assert.equalBytes(buffer, Array.from(testBuffer), "not a ntlmv2 filetime buffer");
    });
  });

  describe(`parseNegotiationMessage(buffer: Buffer)`, () => {
    it("returns negotiation message", () => {
      const negotiationMessage = ntlmv2.parseNegotiationMessage(testBuffer);
      assert.equal(negotiationMessage.domain, domain.toUpperCase(), "not expected domain");
      assert.equal(negotiationMessage.hostname, hostname.toUpperCase(), "not expected hostname");
      assert.equal(negotiationMessage.negotiateFlags, negotiateFlags, "not expected negotiateFlags");
    });
  });
});