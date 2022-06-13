import { SearchStore } from '@/search/store';
import { VideoStore } from '@/video/store';
import { FileStore } from '@/file/store';
import { TrackStore } from '@/track/store';
import { AppearanceStore } from '@/appearance/store';
import { ContentScriptStore } from '@/contentScript/store';

export type StoreKey = 'searchStore' | 'subtitleStore' | 'videoStore' | 'navigationStore' | 'fileStore' | 'trackStore' | 'appearanceStore' | 'contentScriptStore';
export type Store<T extends StoreKey> = T extends 'searchStore'
  ? SearchStore
  : T extends 'videoStore'
  ? VideoStore
  : T extends 'fileStore'
  ? FileStore
  : T extends 'trackStore'
  ? TrackStore
  : T extends 'appearanceStore'
  ? AppearanceStore
  : T extends 'contentScriptStore'
  ? ContentScriptStore
  : unknown;
