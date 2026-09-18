# RTW context for LLMs

Paste this file (or `@CLAUDE.md`) into an LLM session before building, explaining, or reviewing Real Time Web work.

**Canonical corpus (prefer these over memory or analogies):**

- `source.txt` — site structure, conceptual copy, FAQ plan, editorial boundaries
- `content/docs/**` — published vs draft pages on this prototype
- `RTW_Synx_PDF_Summary.md` (repo root, if present) — pre-read of internal PDFs; not a substitute for `source.txt`

If a claim is not in that corpus, say it is unspecified. Do not invent Morph.Space screens, Synx APIs, token payloads, domain registration steps, or protocols.

This repository (`rtwp` / therealwebpoc) is a **documentation and journal prototype**. It is not Morph.Space and not a Synx runtime.

Do not use em dashes in user-facing copy.

---

## Three places (do not merge)

| Place | Role in the source | Not this |
|---|---|---|
| **RealTimeWeb.org** | The architecture site. Explains RTW, MAD, Ghost Space. Conceptual questions live here. **No account is created here.** | Not a product login. Not the network. |
| **Morph.Space** | Marketplace and environment: establish domains, publish resources, join the network. Account, marketplace, and onboarding questions live here. | Not “just Gmail.” It is how you participate, not only an inbox. |
| **Synx / synx.tools** | Tools to **configure, administer, secure, and maintain** RTW services. SynxPass is part of Synx Tools. Known implementation: TCP/IP, HTTPS, websocket. Synx BIOS: XML and JSON (default XML). | Not only a settings menu. Synx does not have to be “the operator of every network”; it is the toolchain in the known implementation. |

Teaching analogy (rough, not architecture): RealTimeWeb.org is reading how email works. Morph.Space is where you get an identity and join. Synx is how you run and secure the connection afterward.

Current implementation of MAD in the source: **Synx.tools** and marketplace **Morph.Space**.

---

## What RTW is

**Real Time Web (RTW)** is a network architecture and framework for connecting live physical and virtual resources (sensors, actuators, devices, applications, AI agents, services, data sources, and people) with bidirectional relationships, without relying entirely on copied datasets and provider-specific APIs.

It is not a single app, not a replacement for the Internet, and not the World Wide Web. WWW connects documents. RTW is pitched as live, stateful relationships on top of and alongside the existing Internet.

**MAD (Morphic Architecture Design)** is the blueprint behind RTW. Public source: introduced **2008** by **Paal Kristian Levang**. Do not treat later investor-PDF extras as RealTimeWeb.org FAQ answers unless they also appear in `source.txt`.

---

## MAD: four independently owned layers

A change in one layer does not have to redefine the whole relationship. Different parties can own different layers.

1. **Infrastructure layer** — physical or virtual infrastructure: processing, connectivity, storage where required, energy.
2. **Network and security layer** — addressing, identity, authentication, authorization, trust, secure communication. Auth system is **optional** in MAD. Known implementation: **SynxPass**.
3. **Domain and application layer** — domains, services, applications, transformation logic.
4. **Resource and ownership layer** — person, organization, machine, or device that generates or owns the resource and controls whether it may be accessed or shared.

Example in the source: sending a message to a friend uses all four layers; hardware provider, network operator, app developer, and end user need not be the same owner.

---

## Endpoints, ghosts, Ghost Space

**Endpoint:** a network resource that can participate (sensor, actuator, AI agent, application, device, domain resource, user-controlled data source, including an endpoint that only keeps a connection alive). People participate in the ecosystem. Do **not** say “a person is a ghost.” The ghost is tied to a **resource/endpoint**, not to a human avatar.

**Ghost:** shared-memory representation / proxy for **one** network resource. It provides identity, behavior, and context when an active connection is present. It operates in multiple layers. Other stack layers can access it at runtime.

**Bijective:** one endpoint ↔ one ghost, uniquely addressable both ways. Never “one ghost shared by two endpoints.”

**Ghost Space:** the shared **coordination / shared-state** environment around that resource, so infrastructure, security, applications, and owners can observe authorized updates **without one party owning the whole stack**. It is **not** a chat room where people’s avatars meet.

**ghostId:** whoever owns the ghostId owns the **data at that endpoint**.

**Ghost id zero:** the service (application-layer ghostid). Transferring ghost id zero transfers the **service itself**, independent of who owns data layers on other ghosts.

### Ownership split on a ghost

When a Morphic service is created, the **service owner** is primary owner of allocated ghosts.

When a user registers, the service owner **transfers the ghostId**. When the user **confirms**:

- **Data layer** belongs to the user.
- **Application layer** stays with the service owner.
- The service owner has access to a **local copy** of the data.

The data source is owned by the user who controls the endpoint and registered it against the endpoint ghost. A ghost **can be transferred** to another person (that is a change of ownership, not a casual share).

If an identified user owns and controls the **whole stack of a domain**, that user also controls ownership of allocated ghosts for endpoints connecting against that **domain address space**. **Domain here is not “a website URL.”** It is an address space you control. Whether you need a public DNS name, can register an RTW domain on Morph, or can attach a domain you already own is **unanswered** in the source.

---

## Morph vs transfer (this is the access model)

| Action | What happens | Owner after |
|---|---|---|
| **Transfer ghostId** + user confirms | Ownership of the data layer (or the whole service if id zero) moves | New holder of the ghostId |
| **Morph the ghost against a secondary service** | Owner gives **read access** to that service. Can be **withdrawn** anytime | Original owner keeps the ghostId |

**Morphing** in the corpus has two related uses. Keep both; do not collapse to “paste formatting”:

1. **Access:** morphing a user’s ghost into another service grants **read access**.
2. **Shape:** along a linking path, data is **morphed into local data models**. Each node only sees **local** context. How it was morphed is unknown outside that service/domain.

**Consume rule (draft architecture notes, still marked draft in source):** data is consumed at an endpoint when the ghosts at the ends are owned by the **same user**, or the receiver has approved **read access**. Same user owning two ghosts usually means **one person, two of their endpoints** (e.g. their sensor and their display), not “User A and User B are the same person.”

**Two different people:** B does not open A’s data because they live on Morph.Space. A morphs (read) or transfers (ownership).

There is **no centralized API or database** required to build RTW services in this model. The RTW network **does not natively store data**. A service provider **may** attach a database to **local** ghosts.

---

## Data path terms

**Data channel:** how a linking path collects sources into a channel of data associated with a user’s ghost in a local service. Canonical example: collect temperature from several sensor services into one user’s channel.

**Normalizer:** link a data source and morph it to fit the **local** data model.

**Materializer:** the service can **change** data after the local model has been updated.

**Kernelizer:** the endpoint/client can receive a self-contained message **before** the data stream, so an empty endpoint can get program (kernelizer) and later data (morphing) without a preinstalled app. Ownership of the ghost decides which ghost layer can be configured at runtime. ghostID may be mapped to a MAC address (bijective object ↔ ghost).

**Micropage:** mini description a service owner publishes of the service and data model / schema. Service owner chooses protocol; RTW is described as **protocol independent**. Schema lives on the micropage.

**Heterogeneous network:** not controlled by a single entity. Independent participants connect and manage their own domains and services.

**Morphic service:** an application-layer service on MAD that allocates ghosts for users.

---

## SynxPass and tokens

- Morph Space uses **Synx Pass** for authorization. SynxPass is part of Synx Tools.
- Token-based. After registration, a user may participate in RTW and join services by getting access to ghosts.
- The **endpoint** must refresh the token **every three minutes** to **send data**.
- Access can be revoked via a **token revocation endpoint**. Session termination can be activated through **Synx runtime BIOS**.
- **Unspecified in this corpus:** how a pass is created, what the token contains, how identity is bound to a person vs machine, and whether refresh is automatic vs operator-built. Do not invent those. Honest line: refresh is **endpoint duty**; automation is not specified here.

Auth in MAD is optional; SynxPass is the **only known valid implementation** named in the source.

---

## Analogies: allowed vs rejected

**Allowed (teaching only):** house + mailbox for endpoint + ghost. Fitness app: company owns the app (application layer); after confirm, you own step counts (data layer); company may keep a local copy.

**Rejected (they teach the wrong system):**

- Ghost = your Google Docs cursor / personal assistant
- Ghost Space = one shared Google Doc everyone is editing
- Morph = paste-to-match-style
- Same-owner consume rule = User A chatting with User B by default
- Sharing with another person = “just send them the ghostId” (that is **transfer**, unless you mean morph/read)
- ghostId = a legal deed (source is **technical ownership of data at the endpoint**, not legal advice)

---

## Honest spec status

Large parts of architecture notes, Morph joining FAQs, Synx Pass FAQs, domain naming, micropage schema language, and service transfer protocol are **draft or unanswered**. Label them. Do not ship invented click-paths as if they were product spec.

---

## What a valid PoC is (for teammates building)

A PoC is **one live service**: identity, a **live channel** (not a stored dump), an **owner**, agents that act on live state, a **visible effect**.

**Good shape:** one owner, one channel, two or three specialist agents (sense / decide / act), one demo moment.

**Canonical software PoC (no hardware):**

1. Fake source (slider, CPU metric, **GitHub webhook** as a live PR stream). That is endpoint A + ghost A.
2. Display or agent UI is endpoint B + ghost B. Same owner. Live update, no “save then poll a DB” as the architecture.
3. Morph: a second consumer gets **read** access in a different shape. Revoke morph; second consumer goes dark; first still works.
4. Prefer **push** (webhook) over polling loops.

**GitHub PR monitor:** valid **if** it is owner-bound live events + ghosts + morph, not a stored PR inbox with search. Prefer webhooks. Mock `ghostId`, 1:1 endpoint↔ghost, consume/morph rules. Say clearly it is a **model mock**, not Morph.Space, until Synx is actually in the loop.

**Do not build as an “RTW PoC”:** chatbot wrapper, Google Docs clone with avatars, full IoT device registry, multi-tenant SaaS, inventing Synx REST.

**Done when** a 90-second clip shows: named service live, source changes, something reacts without a batch job, optionally a second consumer via morph.

NTNU-style 24h PoCs assumed an **existing channel platform**. Without Morph/Synx, mock the model; do not claim you reverse-engineered Synx from PDFs.

---

## Editorial split for any copy or product UX

- Conceptual questions → RealTimeWeb.org
- Account, marketplace, onboarding → Morph.Space
- Configuration and operations → Synx documentation

---

## Quick glossary (source-aligned)

| Term | Meaning |
|---|---|
| RTW | Architecture for live bidirectional resource relationships |
| MAD | Four-layer ownership/operations blueprint (2008) |
| Endpoint | The actual network resource |
| Ghost | 1:1 live proxy / shared-memory stand-in for that resource |
| Ghost Space | Shared state so four layers cooperate on that resource |
| ghostId | Handle for data ownership at the endpoint |
| Ghost id zero | The service itself (application layer) |
| Domain | Address space you control, not “the website URL” |
| Morphic service | App on MAD that allocates ghosts |
| Morph | Read-access grant into another service **and** reshape into local models |
| Transfer | Move ghostId / ownership (confirm required for data layer) |
| Data channel | Linking path collecting live sources into one user’s local ghost |
| Normalizer / materializer / kernelizer | Fit local model / mutate after absorb / deliver program to empty endpoint |
| Micropage | Service’s mini schema/spec sheet |
| SynxPass | Known token auth; endpoint refresh every 3 minutes to send |
| Heterogeneous | Many independent owners, no single-company network |

When unsure, quote `source.txt` and stop. Inventing a missing protocol is a bug, not a feature.
