import { TermHint } from "@/components/TermHint";

type Term = { id: string; term: string; def: string; href?: string };

export const glossary: Term[] = [
  {
    id: "rtw",
    term: "Real-Time Web (RTW)",
    def: "A framework and network architecture for connecting live physical and virtual resources across the Internet.",
    href: "/docs/introduction",
  },
  {
    id: "mad",
    term: "Morphic Architecture Design (MAD)",
    def: "Architectural model introduced by Paal Kristian Levang in 2008. RTW is based on MAD and coordinates at least four logical ownership and operational layers.",
    href: "/docs/architecture",
  },
  {
    id: "morphic-service",
    term: "Morphic service",
    def: "An application-layer service on MAD. When it is created, the service owner is the primary owner of allocated ghosts. After a user confirms a transfer, the user owns the data layer; the service owner keeps the application layer.",
    href: "/docs/architecture/morphic-services",
  },
  {
    id: "domain",
    term: "Domain",
    def: "An address space in the network. If an identified user owns and controls the whole stack of a domain, that user controls allocated ghosts for endpoints connecting against that address space.",
    href: "/docs/architecture/domains",
  },
  {
    id: "ghost",
    term: "Ghost",
    def: "A shared-memory representation of a network resource. Each unique network resource is bijectively connected to its own ghost.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "ghost-space",
    term: "Ghost Space",
    def: "Shared coordination environment through which the four layers can observe and process authorized updates around the same live resource.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "bijective",
    term: "Bijective relationship",
    def: "The endpoint has one corresponding Ghost, and the Ghost represents one corresponding endpoint. The relationship is uniquely addressable from both sides.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "data-channel",
    term: "Data channel",
    def: "A way to describe how a linking path collects data sources into a channel of data associated with a user's ghost in a local service.",
    href: "/docs/architecture/data-channels",
  },
  {
    id: "morph",
    term: "Morphing",
    def: "Transforming data along the linking path to fit a local data model. Each service operates only on local data structures. Morphing a ghost into a secondary service also grants read access that can be withdrawn.",
    href: "/docs/architecture/morphic-services",
  },
  {
    id: "normalizer",
    term: "Normalizer",
    def: "To link a data source and morph the data to fit the local data model.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "materializer",
    term: "Materializer",
    def: "If a service offers to make changes to the data after the local data model has been updated.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "kernelizer",
    term: "Kernelizer",
    def: "Allows an endpoint to receive a self-contained message before the data stream, so program and interface can be built without a preinstalled client.",
    href: "/docs/architecture/interoperability",
  },
  {
    id: "micropage",
    term: "Micropage",
    def: "A mini description of a service and its data model. Service providers describe their own data schema availability here.",
    href: "/docs/architecture/morphic-services",
  },
  {
    id: "ghostid",
    term: "ghostId",
    def: "Ownership of data at an endpoint is given by the ghostId. Whoever owns the ghostId owns the data at that endpoint.",
  },
  {
    id: "ghost-zero",
    term: "Ghost id zero",
    def: "The service (application-layer ghostid). Transferring ghost id zero transfers the service itself.",
  },
  {
    id: "heterogeneous",
    term: "Heterogeneous network",
    def: "A network not controlled by a single entity. It evolves as independent participants connect and manage their own domains and services.",
    href: "/docs/introduction/what-it-can-do",
  },
  {
    id: "endpoint",
    term: "Endpoint",
    def: "The actual network resource that participates: a sensor, actuator, application, device, domain resource, AI agent, or a source you control. The ghost is tied to the resource, not to a person.",
    href: "/docs/architecture/ghost-space",
  },
  {
    id: "bins",
    term: "Bijective Network System (BiNS)",
    def: "The network model behind RTW. Each participating endpoint has one corresponding ghost, uniquely addressable from both sides.",
    href: "/docs/architecture/bijective-network",
  },
  {
    id: "primary-service",
    term: "Primary service",
    def: "The Morphic service an endpoint belongs to first. The endpoint inherits that service’s local data model.",
    href: "/docs/architecture/morphic-services",
  },
  {
    id: "secondary-service",
    term: "Secondary service",
    def: "A service that receives a morphed ghost. The owner grants read access. The data is reshaped into this service’s local model and can be withdrawn.",
    href: "/docs/architecture/morphic-services",
  },
  {
    id: "linking-path",
    term: "Linking path",
    def: "The chain of services that collect and reshape live sources. Each node only sees its own local context.",
    href: "/docs/architecture/data-channels",
  },
  {
    id: "ioe",
    term: "Internet of Everything",
    def: "Physical devices, virtual resources, software services, AI agents, sensors, actuators, and people participating in the same connected ecosystem.",
    href: "/docs/introduction",
  },
  {
    id: "information",
    term: "Data and information",
    def: "Data is the live value before it is stored. Once written into a file or database it becomes information: historical, structured, retrieved on request.",
    href: "/docs/introduction/data-and-information",
  },
  {
    id: "digital-twin",
    term: "Ghost and digital twin",
    def: "A digital twin is usually a stored model of a thing. A ghost is a live stand-in for one endpoint and operates across MAD layers.",
    href: "/docs/architecture/ghosts-and-twins",
  },
  {
    id: "predicate",
    term: "Predicate",
    def: "In a link, the predicate is the verb: what the service does with the incoming source so the result fits the local model.",
    href: "/docs/architecture/morphic-services",
  },
];

export function GlossaryTerm({ id, children }: { id: string; children?: React.ReactNode }) {
  return <TermHint id={id}>{children}</TermHint>;
}
