export interface Series {
  titles: Title[];
  suggestions: Suggestion[];
}

export interface Title {
  availability: Availability;
  inRemindMeList: boolean;
  queue: Queue;
  summary: Summary;
  episodeCount?: number;
  jawSummary: JawSummary;
}

export interface Availability {
  isPlayable: boolean;
  availabilityDate: string;
  availabilityStartTime: number;
  unplayableCause: any;
}

export interface Queue {
  available: boolean;
  inQueue: boolean;
}

export interface Summary {
  type: string;
  id: number;
  isOriginal: boolean;
}

export interface JawSummary {
  trackIds: TrackIds;
  tags: Tag[];
  cast: Cast[];
  creators: Creator[];
  directors: Director[];
  writers: Writer[];
  genres: Genre[];
  availability: Availability2;
  contextualSynopsis: ContextualSynopsis;
  currentContextualSynopsis: CurrentContextualSynopsis;
  maturity: Maturity;
  id: number;
  type: string;
  isOriginal: boolean;
  videoId: number;
  requestId: string;
  userRatingRequestId: string;
  title: string;
  copyright: any;
  releaseYear: number;
  watched: boolean;
  hasAudioDescription: boolean;
  synopsis: string;
  synopsisRegular: string;
  hasSensitiveMetaData: boolean;
  delivery: Delivery;
  titleMaturity: TitleMaturity;
  broadcaster: Broadcaster;
  trailerSummary: TrailerSummary;
  supplementalMessageIcon: string;
  videoMerch?: VideoMerch;
  seasonAbbr?: string;
  seasonCount?: number;
  numSeasonsLabel?: string;
  episodeCount?: number;
  episodeTitle?: string;
  logoImage: LogoImage;
  backgroundImage: BackgroundImage;
  supplementalMessage?: string;
  runtime?: number;
}

export interface TrackIds {
  videoId: number;
  trackId_jaw: number;
  trackId_jawEpisode: number;
  trackId_jawTrailer: number;
  trackId: number;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
}

export interface Creator {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}

export interface Writer {
  id: number;
  name: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Availability2 {
  isPlayable: boolean;
  availabilityDate: string;
  availabilityStartTime: number;
  unplayableCause: any;
}

export interface ContextualSynopsis {
  text: string;
  evidenceKey: string;
}

export interface CurrentContextualSynopsis {
  text: string;
  evidenceKey: string;
}

export interface Maturity {
  rating: Rating;
}

export interface Rating {
  value: string;
  maturityDescription: string;
  specificRatingReason: string;
  maturityLevel: number;
  board: string;
  boardId: number;
  ratingId: number;
  reasons: Reason[];
}

export interface Reason {
  id: number;
  levelDescription: any;
  reasonDescription: string;
}

export interface Delivery {
  has3D: boolean;
  hasHD: boolean;
  hasUltraHD: boolean;
  hasHDR: boolean;
  hasDolbyVision: boolean;
  hasDolbyAtmos: boolean;
  has51Audio: boolean;
  quality: string;
}

export interface TitleMaturity {
  level: number;
}

export interface Broadcaster {
  broadcasterName: any;
  broadcastDate?: string;
}

export interface TrailerSummary {
  length: number;
}

export interface VideoMerch {
  videoId: number;
  id: number;
  start: number;
  computeId: string;
}

export interface LogoImage {
  videoId: number;
  url: string;
  type: string;
  width: number;
  height: number;
  extension: string;
  size: string;
  imageKey: string;
}

export interface BackgroundImage {
  videoId: any;
  url: string;
  width: number;
  height: number;
  extension?: string;
  size?: number;
  focalPoint?: string;
  imageKey?: string;
  image_key?: string;
}

export interface Suggestion {
  summary: Summary2;
}

export interface Summary2 {
  entityId: string;
  type: string;
  id: number;
  name: string;
  isTitleGroup: boolean;
  matchedlocale: any;
}
