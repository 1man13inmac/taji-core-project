export type NodeID = string;
export type EdgeID = string;
export type SourceID = string;

export type NodeKind = "person" | "lineage" | "place" | "source" | "concept";

export type EdgeKind =
  | "TAUGHT_BY"
  | "ASSOCIATED_WITH_LINEAGE"
  | "ORIGINATED_IN"
  | "LIVED_IN"
  | "DERIVED_FROM"
  | "MENTIONS"
  | "RELATED_CONCEPT";

export type ConfidenceLevel = "high" | "medium" | "low" | "legendary";

export type StyleId =
  | "chen"
  | "yang"
  | "wu"
  | "wu_hao"
  | "sun"
  | "zhaobao"
  | "wudang"
  | "other";

export type SourceType = "video" | "book" | "article" | "oral" | "academic" | "other";

export interface BaseNode {
  id: NodeID;
  kind: NodeKind;
  name: string;
  description?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PersonNode extends BaseNode {
  kind: "person";
  chineseName?: string;
  birthYear?: number;
  deathYear?: number;
  roles?: string[];
  associatedStyles?: StyleId[];
  sourceIds?: SourceID[];
  wikiUrl?: string;
}

export interface LineageNode extends BaseNode {
  kind: "lineage";
  styleId: StyleId;
  originPlaceId?: NodeID;
  originPeriod?: string;
  keyFigureIds?: NodeID[];
  featureProfileId?: string;
  sourceIds?: SourceID[];
}

export interface PlaceNode extends BaseNode {
  kind: "place";
  placeType?: "village" | "city" | "mountain" | "temple" | "country" | "other";
  latitude?: number;
  longitude?: number;
  countryCode?: string;
}

export interface SourceNode extends BaseNode {
  kind: "source";
  sourceType: SourceType;
  author?: string;
  year?: number;
  url?: string;
  externalId?: string;
}

export interface ConceptNode extends BaseNode {
  kind: "concept";
}

export type TaijiNode = PersonNode | LineageNode | PlaceNode | SourceNode | ConceptNode;

export interface EdgeEvidence {
  sourceId: SourceID;
  quote?: string;
  timestampSeconds?: number;
  pageRef?: string;
}

export interface Edge {
  id: EdgeID;
  kind: EdgeKind;
  from: NodeID;
  to: NodeID;
  confidence: ConfidenceLevel;
  evidence?: EdgeEvidence[];
  createdAt?: string;
  updatedAt?: string;
}

export type FeaturePresence = "central" | "present" | "weak" | "absent" | "unknown";

export interface PrincipleFeatures {
  wholeBodyPower?: FeaturePresence;
  yieldThenIssue?: FeaturePresence;
  softOverHard?: FeaturePresence;
  relaxationWithoutCollapse?: FeaturePresence;
  spiralMotion?: FeaturePresence;
  groundPathTransfer?: FeaturePresence;
  minimalForce?: FeaturePresence;
}

export interface BodyMethodFeatures {
  frameSize?: "small" | "medium" | "large" | "mixed";
  postureHeight?: "low" | "medium" | "high" | "varied";
  visibleSpiralMotion?: boolean;
  dantianFocus?: FeaturePresence;
  kuaUsage?: FeaturePresence;
  spineUsage?: "vertical_emphasis" | "wave_emphasis" | "neutral" | "unknown";
  weightDistribution?: "single_weighted" | "double_weighted" | "varied";
}

export interface PowerFeatures {
  groundPathEmphasis?: "strong" | "medium" | "weak" | "unknown";
  fajinVisibleInForm?: boolean;
  fajinFrequency?: "rare" | "occasional" | "frequent" | "unknown";
  explosivenessProfile?: "subtle" | "mixed" | "overt";
  jinTypes?: string[];
}

export interface TrainingFeatures {
  slowSoloForm?: boolean;
  fastForm?: boolean;
  standingPractice?: boolean;
  partnerPushHands?: boolean;
  applicationsTraining?: boolean;
  qigongSets?: string[];
  internalDrillsPreserved?: boolean;
  neigongPreserved?: boolean;
}

export interface CurriculumFeatures {
  coreFormCount?: number;
  weaponsIntegrated?: boolean;
  weaponsList?: string[];
  typicalLearningOrder?: string[];
  yearsToFunctionality?: string;
}

export interface TacticalFeatures {
  rangePreference?: "close" | "medium" | "varied";
  emphasisStriking?: "high" | "medium" | "low";
  emphasisThrowing?: "high" | "medium" | "low";
  emphasisQinna?: "high" | "medium" | "low";
  steppingStyle?: "mobile" | "rooted" | "mixed";
}

export interface FeatureProfile {
  id: string;
  lineageId: NodeID;
  principles?: PrincipleFeatures;
  bodyMethod?: BodyMethodFeatures;
  power?: PowerFeatures;
  training?: TrainingFeatures;
  curriculum?: CurriculumFeatures;
  tactical?: TacticalFeatures;
  notes?: string;
  sourceIds?: SourceID[];
  lastReviewed?: string;
  confidence?: ConfidenceLevel;
}

export interface GraphData {
  nodes: Record<NodeID, TaijiNode>;
  edges: Record<EdgeID, Edge>;
  featureProfiles: Record<string, FeatureProfile>;
}

export interface CommonCoreReport {
  computedAt: string;
  stylesIncluded: StyleId[];
  principleCore: Partial<PrincipleFeatures>;
  bodyMethodCore: Partial<BodyMethodFeatures>;
  powerCore: Partial<PowerFeatures>;
  trainingCore: Partial<TrainingFeatures>;
  notes: string;
}
