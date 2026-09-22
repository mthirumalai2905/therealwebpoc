import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { SpecStatus } from "@/components/SpecStatus";
import { EcosystemLink } from "@/components/EcosystemLink";
import { ClarificationBanner } from "@/components/ClarificationBanner";
import { MadLayers } from "@/components/diagrams/MadLayers";
import { GhostBijection } from "@/components/diagrams/GhostBijection";
import { IdentityFlow } from "@/components/diagrams/IdentityFlow";
import { EcosystemMap } from "@/components/diagrams/EcosystemMap";
import { DataChannelMorph } from "@/components/diagrams/DataChannelMorph";
import { WwwVsRtw } from "@/components/diagrams/WwwVsRtw";
import { MessageExample } from "@/components/diagrams/MessageExample";
import { ConceptRtw } from "@/components/diagrams/ConceptRtw";
import { OnboardingFlow } from "@/components/diagrams/OnboardingFlow";
import { NetworkGraph } from "@/components/diagrams/NetworkGraph";
import { Figure } from "@/components/Figure";
import { TwoWebsCompare } from "@/components/diagrams/TwoWebsCompare";
import { LampGhost } from "@/components/diagrams/LampGhost";
import { ServiceSchema } from "@/components/diagrams/ServiceSchema";
import { MorphToSecondary } from "@/components/diagrams/MorphToSecondary";
import { OwnershipGate } from "@/components/diagrams/OwnershipGate";
import { MadLayerTable } from "@/components/diagrams/MadLayerTable";
import { GlossaryTerm } from "@/components/Glossary";
import { GlossaryTable } from "@/components/GlossaryTable";

function slugify(value: unknown): string {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function heading(Tag: "h2" | "h3") {
  return function Heading({ children }: { children?: React.ReactNode }) {
    const id = slugify(children);
    return <Tag id={id}>{children}</Tag>;
  };
}

export const mdxComponents: MDXRemoteProps["components"] = {
  h2: heading("h2"),
  h3: heading("h3"),
  SpecStatus,
  EcosystemLink,
  ClarificationBanner,
  MadLayers,
  GhostBijection,
  IdentityFlow,
  EcosystemMap,
  DataChannelMorph,
  WwwVsRtw,
  MessageExample,
  ConceptRtw,
  OnboardingFlow,
  NetworkGraph,
  Figure,
  TwoWebsCompare,
  LampGhost,
  ServiceSchema,
  MorphToSecondary,
  OwnershipGate,
  MadLayerTable,
  GlossaryTerm,
  GlossaryTable,
};
