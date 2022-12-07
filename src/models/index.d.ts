import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResidenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContainerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerUser = {
  readonly id: string;
  readonly userName?: string | null;
  readonly Residence?: Residence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userResidenceId?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly userName?: string | null;
  readonly Residence: AsyncItem<Residence | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userResidenceId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerResidence = {
  readonly id: string;
  readonly rName?: string | null;
  readonly Places?: (Place | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResidence = {
  readonly id: string;
  readonly rName?: string | null;
  readonly Places: AsyncCollection<Place>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Residence = LazyLoading extends LazyLoadingDisabled ? EagerResidence : LazyResidence

export declare const Residence: (new (init: ModelInit<Residence, ResidenceMetaData>) => Residence) & {
  copyOf(source: Residence, mutator: (draft: MutableModel<Residence, ResidenceMetaData>) => MutableModel<Residence, ResidenceMetaData> | void): Residence;
}

type EagerPlace = {
  readonly id: string;
  readonly pName?: string | null;
  readonly Containers?: (Container | null)[] | null;
  readonly residenceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlace = {
  readonly id: string;
  readonly pName?: string | null;
  readonly Containers: AsyncCollection<Container>;
  readonly residenceID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Place = LazyLoading extends LazyLoadingDisabled ? EagerPlace : LazyPlace

export declare const Place: (new (init: ModelInit<Place, PlaceMetaData>) => Place) & {
  copyOf(source: Place, mutator: (draft: MutableModel<Place, PlaceMetaData>) => MutableModel<Place, PlaceMetaData> | void): Place;
}

type EagerContainer = {
  readonly id: string;
  readonly cName?: string | null;
  readonly Items?: (Item | null)[] | null;
  readonly placeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContainer = {
  readonly id: string;
  readonly cName?: string | null;
  readonly Items: AsyncCollection<Item>;
  readonly placeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Container = LazyLoading extends LazyLoadingDisabled ? EagerContainer : LazyContainer

export declare const Container: (new (init: ModelInit<Container, ContainerMetaData>) => Container) & {
  copyOf(source: Container, mutator: (draft: MutableModel<Container, ContainerMetaData>) => MutableModel<Container, ContainerMetaData> | void): Container;
}

type EagerItem = {
  readonly id: string;
  readonly description?: string | null;
  readonly iName?: string | null;
  readonly photo?: string | null;
  readonly containerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly id: string;
  readonly description?: string | null;
  readonly iName?: string | null;
  readonly photo?: string | null;
  readonly containerID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item, ItemMetaData>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}