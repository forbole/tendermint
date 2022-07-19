(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{769:function(e,o,t){"use strict";t.r(o);var s=t(1),i=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pbts-protocol-specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-protocol-specification"}},[e._v("#")]),e._v(" PBTS: Protocol Specification")]),e._v(" "),t("h2",{attrs:{id:"proposal-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-time"}},[e._v("#")]),e._v(" Proposal Time")]),e._v(" "),t("p",[e._v("PBTS computes for a proposed value "),t("code",[e._v("v")]),e._v(" the proposal time "),t("code",[e._v("v.time")]),e._v(", with bounded difference to the actual real-time the proposed value was generated.\nThe proposal time is read from the clock of the process that proposes a value for the first time, its original proposer.")]),e._v(" "),t("p",[e._v("With PBTS, therefore, we assume that processes have access to "),t("strong",[e._v("synchronized clocks")]),e._v(".\nThe proper definition of what it means can be found in the "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/pbts-sysmodel_002_draft.html"}},[e._v("system model")]),e._v(",\nbut essentially we assume that two correct processes do not simultaneous read from their clocks\ntime values that differ more than "),t("code",[e._v("PRECISION")]),e._v(", which is a system parameter.")],1),e._v(" "),t("h3",{attrs:{id:"proposal-times-are-definitive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-times-are-definitive"}},[e._v("#")]),e._v(" Proposal times are definitive")]),e._v(" "),t("p",[e._v("When a value "),t("code",[e._v("v")]),e._v(" is produced by a process, it also assigns the associated proposal time "),t("code",[e._v("v.time")]),e._v(".\nIf the same value "),t("code",[e._v("v")]),e._v(" is then re-proposed in a subsequent round of consensus,\nit retains its original time, assigned by its original proposer.")]),e._v(" "),t("p",[e._v("A value "),t("code",[e._v("v")]),e._v(" should re-proposed when it becomes locked by the network, i.e., when it receives "),t("code",[e._v("2f + 1 PREVOTES")]),e._v(" in a round "),t("code",[e._v("r")]),e._v(" of consensus.\nThis means that processes with "),t("code",[e._v("2f + 1")]),e._v("-equivalent voting power accepted, in round "),t("code",[e._v("r")]),e._v(", both "),t("code",[e._v("v")]),e._v(" and its associated time "),t("code",[e._v("v.time")]),e._v(".\nSince the originally proposed value and its associated time were considered valid, there is no reason for reassigning "),t("code",[e._v("v.time")]),e._v(".")]),e._v(" "),t("p",[e._v("In the "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts-algorithm_001_draft.html"}},[e._v("first version")]),e._v(" of this specification, proposals were defined as pairs "),t("code",[e._v("(v, time)")]),e._v(".\nIn addition, the same value "),t("code",[e._v("v")]),e._v(" could be proposed, in different rounds, but would be associated to distinct times each time it was reproposed.\nSince this possibility does not exist in this second specification, the proposal time became part of the proposed value.\nWith this simplification, several small changes to the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv"),t("OutboundLink")],1),e._v(" algorithm are no longer required.")],1),e._v(" "),t("h2",{attrs:{id:"time-monotonicity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-monotonicity"}},[e._v("#")]),e._v(" Time Monotonicity")]),e._v(" "),t("p",[e._v("Values decided in successive heights of consensus must have increasing times, so:")]),e._v(" "),t("ul",[t("li",[e._v("Monotonicity: for any process "),t("code",[e._v("p")]),e._v(" and any two decided heights "),t("code",[e._v("h")]),e._v(" and "),t("code",[e._v("h'")]),e._v(", if "),t("code",[e._v("h > h'")]),e._v(" then "),t("code",[e._v("decision_p[h].time > decision_p[h'].time")]),e._v(".")])]),e._v(" "),t("p",[e._v("For ensuring time monotonicity, it is enough to ensure that a value "),t("code",[e._v("v")]),e._v(" proposed by process "),t("code",[e._v("p")]),e._v(" at height "),t("code",[e._v("h_p")]),e._v(" has "),t("code",[e._v("v.time > decision_p[h_p-1].time")]),e._v(".\nSo, if process "),t("code",[e._v("p")]),e._v(" is the proposer of a round of height "),t("code",[e._v("h_p")]),e._v(" and reads from its clock a time "),t("code",[e._v("now_p <= decision_p[h_p-1]")]),e._v(",\nit should postpone the generation of its proposal until "),t("code",[e._v("now_p > decision_p[h_p-1]")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Although it should be considered, this scenario is unlikely during regular operation,\nas from "),t("code",[e._v("decision_p[h_p-1].time")]),e._v(" and the start of height "),t("code",[e._v("h_p")]),e._v(", a complete consensus instance need to terminate.")])]),e._v(" "),t("p",[e._v("Notice that monotonicity is not introduced by this proposal, being already ensured by  "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/spec/consensus/bft-time.md",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("BFTTime")]),t("OutboundLink")],1),e._v(".\nIn "),t("code",[e._v("BFTTime")]),e._v(", the "),t("code",[e._v("Timestamp")]),e._v(" field of every "),t("code",[e._v("Precommit")]),e._v(" message of height "),t("code",[e._v("h_p")]),e._v(" sent by a correct process is required to be larger than "),t("code",[e._v("decision_p[h_p-1].time")]),e._v(", as one of such "),t("code",[e._v("Timestamp")]),e._v(" fields becomes the time assigned to a value proposed at height "),t("code",[e._v("h_p")]),e._v(".")]),e._v(" "),t("p",[e._v("The time monotonicity of values proposed in heights of consensus is verified by the "),t("code",[e._v("valid()")]),e._v(" predicate, to which every proposed value is submitted.\nA value rejected by the "),t("code",[e._v("valid()")]),e._v(" implementation is not accepted by any correct process.")]),e._v(" "),t("h2",{attrs:{id:"timely-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timely-proposals"}},[e._v("#")]),e._v(" Timely Proposals")]),e._v(" "),t("p",[e._v("PBTS introduces a new requirement for a process to accept a proposal: the proposal must be "),t("code",[e._v("timely")]),e._v(".\nIt is a temporal requirement, associated with the following synchrony (that is, timing)\n"),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/pbts-sysmodel_002_draft.html"}},[e._v("assumptions")]),e._v(" regarding the behavior of processes and the network:")],1),e._v(" "),t("ul",[t("li",[e._v("Synchronized clocks: the values simultaneously read from clocks of any two correct processes differ by at most "),t("code",[e._v("PRECISION")]),e._v(";")]),e._v(" "),t("li",[e._v("Bounded transmission delays: the real time interval between the sending of a proposal at a correct process, and the reception of the proposal at any correct process is upper bounded by "),t("code",[e._v("MSGDELAY")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"pbts-reception-step-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-reception-step-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-RECEPTION-STEP.1]")])]),e._v(" "),t("p",[e._v("Let "),t("code",[e._v("now_p")]),e._v(" be the time, read from the clock of process "),t("code",[e._v("p")]),e._v(", at which "),t("code",[e._v("p")]),e._v(" receives the proposed value "),t("code",[e._v("v")]),e._v(".\nThe proposal is considered "),t("code",[e._v("timely")]),e._v(" by "),t("code",[e._v("p")]),e._v(" when:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("now_p >= v.time - PRECISION")])]),e._v(" "),t("li",[t("code",[e._v("now_p <= v.time + MSGDELAY + PRECISION")])])]),e._v(" "),t("p",[e._v("The first condition derives from the fact that the generation and sending of "),t("code",[e._v("v")]),e._v(" precedes its reception.\nThe minimum receiving time "),t("code",[e._v("now_p")]),e._v(" for "),t("code",[e._v("v")]),e._v(" be considered "),t("code",[e._v("timely")]),e._v(" by "),t("code",[e._v("p")]),e._v(" is derived from the extreme scenario when\nthe clock of "),t("code",[e._v("p")]),e._v(" is "),t("code",[e._v("PRECISION")]),e._v(" "),t("em",[e._v("behind")]),e._v(" of the clock of the proposer of "),t("code",[e._v("v")]),e._v(", and the proposal's transmission delay is "),t("code",[e._v("0")]),e._v(" (minimum).")]),e._v(" "),t("p",[e._v("The second condition derives from the assumption of an upper bound for the transmission delay of a proposal.\nThe maximum receiving time "),t("code",[e._v("now_p")]),e._v(" for "),t("code",[e._v("v")]),e._v(" be considered "),t("code",[e._v("timely")]),e._v(" by "),t("code",[e._v("p")]),e._v(" is derived from the extreme scenario when\nthe clock of "),t("code",[e._v("p")]),e._v(" is "),t("code",[e._v("PRECISION")]),e._v(" "),t("em",[e._v("ahead")]),e._v(" of the clock of the proposer of "),t("code",[e._v("v")]),e._v(", and the proposal's transmission delay is "),t("code",[e._v("MSGDELAY")]),e._v(" (maximum).")]),e._v(" "),t("h2",{attrs:{id:"updated-consensus-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updated-consensus-algorithm"}},[e._v("#")]),e._v(" Updated Consensus Algorithm")]),e._v(" "),t("p",[e._v("The following changes are proposed for the algorithm in the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"new-startround"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-startround"}},[e._v("#")]),e._v(" New "),t("code",[e._v("StartRound")])]),e._v(" "),t("p",[e._v("There are two additions to the "),t("code",[e._v("propose")]),e._v(" round step when executed by the "),t("code",[e._v("proposer")]),e._v(" of a round:")]),e._v(" "),t("ol",[t("li",[e._v("to ensure time monotonicity, the proposer does not propose a value until its current local time becomes greater than the previously decided value's time")]),e._v(" "),t("li",[e._v("when the proposer produce a new proposal it sets the proposal's time to its current local time\n"),t("ul",[t("li",[e._v("no changes are made to the logic when a proposer has a non-nil "),t("code",[e._v("validValue")]),e._v(", which retains its original proposal time.")])])])]),e._v(" "),t("h4",{attrs:{id:"pbts-alg-startround-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-startround-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-ALG-STARTROUND.1]")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gU3RhcnRSb3VuZChyb3VuZCkgewogcm91bmRfcCDihpAgcm91bmQKIHN0ZXBfcCDihpAgcHJvcG9zZQogaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewogIHdhaXQgdW50aWwgbm93X3AgJmd0OyBkZWNpc2lvbl9wW2hfcC0xXS50aW1lIC8vIHRpbWUgbW9ub3RvbmljaXR5CiAgaWYgdmFsaWRWYWx1ZV9wICE9IG5pbCB7CiAgIHByb3Bvc2FsIOKGkCB2YWxpZFZhbHVlX3AKICB9IGVsc2UgewogICBwcm9wb3NhbCDihpAgZ2V0VmFsdWUoKQogICBwcm9wb3NhbC50aW1lIOKGkCBub3dfcCAvLyBwcm9wb3NhbCB0aW1lCiAgfQogICBicm9hZGNhc3Qg4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgcHJvcG9zYWwsIHZhbGlkUm91bmRfcOKfqQogfSBlbHNlIHsKICBzY2hlZHVsZSBPblRpbWVvdXRQcm9wb3NlKGhfcCxyb3VuZF9wKSB0byBiZSBleGVjdXRlZCBhZnRlciB0aW1lb3V0UHJvcG9zZShyb3VuZF9wKQogfQp9Cg=="}}),e._v(" "),t("h4",{attrs:{id:"new-rule-replacing-lines-22-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-rule-replacing-lines-22-27"}},[e._v("#")]),e._v(" New Rule Replacing Lines 22 - 27")]),e._v(" "),t("p",[e._v("The rule on line 22 applies to values "),t("code",[e._v("v")]),e._v(" proposed for the first time, i.e., for proposals not backed by "),t("code",[e._v("2f + 1 PREVOTE")]),e._v("s for "),t("code",[e._v("v")]),e._v(" in a previous round.\nThe "),t("code",[e._v("PROPOSAL")]),e._v(" message, in this case, carry "),t("code",[e._v("-1")]),e._v(" in its "),t("code",[e._v("validRound")]),e._v(" field.")]),e._v(" "),t("p",[e._v("The new rule for issuing a "),t("code",[e._v("PREVOTE")]),e._v(" for a proposed value "),t("code",[e._v("v")]),e._v(" requires the value to be "),t("code",[e._v("timely")]),e._v(".\nAs the "),t("code",[e._v("timely")]),e._v(" predicate is evaluated in the moment that the value is received,\nas part of a "),t("code",[e._v("PROPOSAL")]),e._v(" message, we require the "),t("code",[e._v("PROPOSAL")]),e._v(" message to be "),t("code",[e._v("timely")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"pbts-alg-upon-prop-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-alg-upon-prop-1"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-ALG-UPON-PROP.1]")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgdiwg4oiSMeKfqSkgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApIHdoaWxlIHN0ZXBfcCA9IHByb3Bvc2UgZG8gewogIGlmIHZhbGlkKHYpIOKIpyAobG9ja2VkUm91bmRfcCA9IOKIkjEg4oioIGxvY2tlZFZhbHVlX3AgPSB2KSB7CiAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBpZCh2KeKfqSAKICB9CiAgZWxzZSB7CiAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgfQogIHN0ZXBfcCDihpAgcHJldm90ZQp9Cg=="}}),e._v(" "),t("h4",{attrs:{id:"rules-at-lines-28-33-remain-unchanged"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rules-at-lines-28-33-remain-unchanged"}},[e._v("#")]),e._v(" Rules at Lines 28 - 33 remain unchanged")]),e._v(" "),t("p",[e._v("The rule on line 28 applies to values "),t("code",[e._v("v")]),e._v(" proposed again in the current round because its proposer received "),t("code",[e._v("2f + 1 PREVOTE")]),e._v("s for "),t("code",[e._v("v")]),e._v(" in a previous round "),t("code",[e._v("vr")]),e._v(".\nThis means that there was a round "),t("code",[e._v("r <= vr")]),e._v(" in which "),t("code",[e._v("2f + 1")]),e._v(" processes accepted "),t("code",[e._v("v")]),e._v(" for the first time, and so sent "),t("code",[e._v("PREVOTE")]),e._v("s for "),t("code",[e._v("v")]),e._v(".\nWhich, in turn, means that these processes executed the line 22 of the algorithm, and therefore judged "),t("code",[e._v("v")]),e._v(" as a "),t("code",[e._v("timely")]),e._v(" proposal.")]),e._v(" "),t("p",[e._v("In other words, we don't need to verify whether "),t("code",[e._v("v")]),e._v(" is a timely proposal because at least "),t("code",[e._v("f + 1")]),e._v(" processes judged "),t("code",[e._v("v")]),e._v(" as "),t("code",[e._v("timely")]),e._v(" in a previous round,\nand because, since "),t("code",[e._v("v")]),e._v(" was re-proposed as a "),t("code",[e._v("validValue")]),e._v(" (line 16), "),t("code",[e._v("v.time")]),e._v(" has not being updated from its original proposal.")]),e._v(" "),t("p",[t("strong",[e._v("All other rules remains unchanged.")])]),e._v(" "),t("p",[e._v("Back to "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/"}},[e._v("main document")]),e._v(".")],1)],1)}),[],!1,null,null,null);o.default=i.exports}}]);