/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateResidence: OnCreateResidenceSubscription;
  onUpdateResidence: OnUpdateResidenceSubscription;
  onDeleteResidence: OnDeleteResidenceSubscription;
  onCreatePlace: OnCreatePlaceSubscription;
  onUpdatePlace: OnUpdatePlaceSubscription;
  onDeletePlace: OnDeletePlaceSubscription;
  onCreateContainer: OnCreateContainerSubscription;
  onUpdateContainer: OnUpdateContainerSubscription;
  onDeleteContainer: OnDeleteContainerSubscription;
  onCreateItem: OnCreateItemSubscription;
  onUpdateItem: OnUpdateItemSubscription;
  onDeleteItem: OnDeleteItemSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  userName?: string | null;
  _version?: number | null;
  userResidenceId?: string | null;
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userResidenceId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: Residence | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type Residence = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: ModelPlaceConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection";
  items: Array<Place | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Place = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: ModelContainerConnection | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelContainerConnection = {
  __typename: "ModelContainerConnection";
  items: Array<Container | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Container = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: ModelItemConnection | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection";
  items: Array<Item | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Item = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserInput = {
  id: string;
  userName?: string | null;
  _version?: number | null;
  userResidenceId?: string | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateResidenceInput = {
  id?: string | null;
  rName?: string | null;
  _version?: number | null;
};

export type ModelResidenceConditionInput = {
  rName?: ModelStringInput | null;
  and?: Array<ModelResidenceConditionInput | null> | null;
  or?: Array<ModelResidenceConditionInput | null> | null;
  not?: ModelResidenceConditionInput | null;
};

export type UpdateResidenceInput = {
  id: string;
  rName?: string | null;
  _version?: number | null;
};

export type DeleteResidenceInput = {
  id: string;
  _version?: number | null;
};

export type CreatePlaceInput = {
  id?: string | null;
  pName?: string | null;
  residenceID: string;
  _version?: number | null;
};

export type ModelPlaceConditionInput = {
  pName?: ModelStringInput | null;
  residenceID?: ModelIDInput | null;
  and?: Array<ModelPlaceConditionInput | null> | null;
  or?: Array<ModelPlaceConditionInput | null> | null;
  not?: ModelPlaceConditionInput | null;
};

export type UpdatePlaceInput = {
  id: string;
  pName?: string | null;
  residenceID?: string | null;
  _version?: number | null;
};

export type DeletePlaceInput = {
  id: string;
  _version?: number | null;
};

export type CreateContainerInput = {
  id?: string | null;
  cName?: string | null;
  placeID: string;
  _version?: number | null;
};

export type ModelContainerConditionInput = {
  cName?: ModelStringInput | null;
  placeID?: ModelIDInput | null;
  and?: Array<ModelContainerConditionInput | null> | null;
  or?: Array<ModelContainerConditionInput | null> | null;
  not?: ModelContainerConditionInput | null;
};

export type UpdateContainerInput = {
  id: string;
  cName?: string | null;
  placeID?: string | null;
  _version?: number | null;
};

export type DeleteContainerInput = {
  id: string;
  _version?: number | null;
};

export type CreateItemInput = {
  id?: string | null;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  _version?: number | null;
};

export type ModelItemConditionInput = {
  description?: ModelStringInput | null;
  iName?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  containerID?: ModelIDInput | null;
  and?: Array<ModelItemConditionInput | null> | null;
  or?: Array<ModelItemConditionInput | null> | null;
  not?: ModelItemConditionInput | null;
};

export type UpdateItemInput = {
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID?: string | null;
  _version?: number | null;
};

export type DeleteItemInput = {
  id: string;
  _version?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userResidenceId?: ModelIDInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelResidenceFilterInput = {
  id?: ModelIDInput | null;
  rName?: ModelStringInput | null;
  and?: Array<ModelResidenceFilterInput | null> | null;
  or?: Array<ModelResidenceFilterInput | null> | null;
  not?: ModelResidenceFilterInput | null;
};

export type ModelResidenceConnection = {
  __typename: "ModelResidenceConnection";
  items: Array<Residence | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null;
  pName?: ModelStringInput | null;
  residenceID?: ModelIDInput | null;
  and?: Array<ModelPlaceFilterInput | null> | null;
  or?: Array<ModelPlaceFilterInput | null> | null;
  not?: ModelPlaceFilterInput | null;
};

export type ModelContainerFilterInput = {
  id?: ModelIDInput | null;
  cName?: ModelStringInput | null;
  placeID?: ModelIDInput | null;
  and?: Array<ModelContainerFilterInput | null> | null;
  or?: Array<ModelContainerFilterInput | null> | null;
  not?: ModelContainerFilterInput | null;
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null;
  description?: ModelStringInput | null;
  iName?: ModelStringInput | null;
  photo?: ModelStringInput | null;
  containerID?: ModelIDInput | null;
  and?: Array<ModelItemFilterInput | null> | null;
  or?: Array<ModelItemFilterInput | null> | null;
  not?: ModelItemFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type CreateResidenceMutation = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateResidenceMutation = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteResidenceMutation = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreatePlaceMutation = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdatePlaceMutation = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeletePlaceMutation = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateContainerMutation = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateContainerMutation = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteContainerMutation = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateItemMutation = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateItemMutation = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteItemMutation = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    userName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    userResidenceId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    userName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    userResidenceId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetResidenceQuery = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListResidencesQuery = {
  __typename: "ModelResidenceConnection";
  items: Array<{
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncResidencesQuery = {
  __typename: "ModelResidenceConnection";
  items: Array<{
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetPlaceQuery = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListPlacesQuery = {
  __typename: "ModelPlaceConnection";
  items: Array<{
    __typename: "Place";
    id: string;
    pName?: string | null;
    residenceID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPlacesQuery = {
  __typename: "ModelPlaceConnection";
  items: Array<{
    __typename: "Place";
    id: string;
    pName?: string | null;
    residenceID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetContainerQuery = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListContainersQuery = {
  __typename: "ModelContainerConnection";
  items: Array<{
    __typename: "Container";
    id: string;
    cName?: string | null;
    placeID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncContainersQuery = {
  __typename: "ModelContainerConnection";
  items: Array<{
    __typename: "Container";
    id: string;
    cName?: string | null;
    placeID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetItemQuery = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListItemsQuery = {
  __typename: "ModelItemConnection";
  items: Array<{
    __typename: "Item";
    id: string;
    description?: string | null;
    iName?: string | null;
    photo?: string | null;
    containerID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncItemsQuery = {
  __typename: "ModelItemConnection";
  items: Array<{
    __typename: "Item";
    id: string;
    description?: string | null;
    iName?: string | null;
    photo?: string | null;
    containerID: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  userName?: string | null;
  Residence?: {
    __typename: "Residence";
    id: string;
    rName?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  userResidenceId?: string | null;
};

export type OnCreateResidenceSubscription = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateResidenceSubscription = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteResidenceSubscription = {
  __typename: "Residence";
  id: string;
  rName?: string | null;
  Places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreatePlaceSubscription = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdatePlaceSubscription = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeletePlaceSubscription = {
  __typename: "Place";
  id: string;
  pName?: string | null;
  Containers?: {
    __typename: "ModelContainerConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  residenceID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateContainerSubscription = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateContainerSubscription = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteContainerSubscription = {
  __typename: "Container";
  id: string;
  cName?: string | null;
  Items?: {
    __typename: "ModelItemConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  placeID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateItemSubscription = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateItemSubscription = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteItemSubscription = {
  __typename: "Item";
  id: string;
  description?: string | null;
  iName?: string | null;
  photo?: string | null;
  containerID: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateResidence(
    input: CreateResidenceInput,
    condition?: ModelResidenceConditionInput
  ): Promise<CreateResidenceMutation> {
    const statement = `mutation CreateResidence($input: CreateResidenceInput!, $condition: ModelResidenceConditionInput) {
        createResidence(input: $input, condition: $condition) {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateResidenceMutation>response.data.createResidence;
  }
  async UpdateResidence(
    input: UpdateResidenceInput,
    condition?: ModelResidenceConditionInput
  ): Promise<UpdateResidenceMutation> {
    const statement = `mutation UpdateResidence($input: UpdateResidenceInput!, $condition: ModelResidenceConditionInput) {
        updateResidence(input: $input, condition: $condition) {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateResidenceMutation>response.data.updateResidence;
  }
  async DeleteResidence(
    input: DeleteResidenceInput,
    condition?: ModelResidenceConditionInput
  ): Promise<DeleteResidenceMutation> {
    const statement = `mutation DeleteResidence($input: DeleteResidenceInput!, $condition: ModelResidenceConditionInput) {
        deleteResidence(input: $input, condition: $condition) {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteResidenceMutation>response.data.deleteResidence;
  }
  async CreatePlace(
    input: CreatePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<CreatePlaceMutation> {
    const statement = `mutation CreatePlace($input: CreatePlaceInput!, $condition: ModelPlaceConditionInput) {
        createPlace(input: $input, condition: $condition) {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlaceMutation>response.data.createPlace;
  }
  async UpdatePlace(
    input: UpdatePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<UpdatePlaceMutation> {
    const statement = `mutation UpdatePlace($input: UpdatePlaceInput!, $condition: ModelPlaceConditionInput) {
        updatePlace(input: $input, condition: $condition) {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlaceMutation>response.data.updatePlace;
  }
  async DeletePlace(
    input: DeletePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<DeletePlaceMutation> {
    const statement = `mutation DeletePlace($input: DeletePlaceInput!, $condition: ModelPlaceConditionInput) {
        deletePlace(input: $input, condition: $condition) {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlaceMutation>response.data.deletePlace;
  }
  async CreateContainer(
    input: CreateContainerInput,
    condition?: ModelContainerConditionInput
  ): Promise<CreateContainerMutation> {
    const statement = `mutation CreateContainer($input: CreateContainerInput!, $condition: ModelContainerConditionInput) {
        createContainer(input: $input, condition: $condition) {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateContainerMutation>response.data.createContainer;
  }
  async UpdateContainer(
    input: UpdateContainerInput,
    condition?: ModelContainerConditionInput
  ): Promise<UpdateContainerMutation> {
    const statement = `mutation UpdateContainer($input: UpdateContainerInput!, $condition: ModelContainerConditionInput) {
        updateContainer(input: $input, condition: $condition) {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateContainerMutation>response.data.updateContainer;
  }
  async DeleteContainer(
    input: DeleteContainerInput,
    condition?: ModelContainerConditionInput
  ): Promise<DeleteContainerMutation> {
    const statement = `mutation DeleteContainer($input: DeleteContainerInput!, $condition: ModelContainerConditionInput) {
        deleteContainer(input: $input, condition: $condition) {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteContainerMutation>response.data.deleteContainer;
  }
  async CreateItem(
    input: CreateItemInput,
    condition?: ModelItemConditionInput
  ): Promise<CreateItemMutation> {
    const statement = `mutation CreateItem($input: CreateItemInput!, $condition: ModelItemConditionInput) {
        createItem(input: $input, condition: $condition) {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateItemMutation>response.data.createItem;
  }
  async UpdateItem(
    input: UpdateItemInput,
    condition?: ModelItemConditionInput
  ): Promise<UpdateItemMutation> {
    const statement = `mutation UpdateItem($input: UpdateItemInput!, $condition: ModelItemConditionInput) {
        updateItem(input: $input, condition: $condition) {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateItemMutation>response.data.updateItem;
  }
  async DeleteItem(
    input: DeleteItemInput,
    condition?: ModelItemConditionInput
  ): Promise<DeleteItemMutation> {
    const statement = `mutation DeleteItem($input: DeleteItemInput!, $condition: ModelItemConditionInput) {
        deleteItem(input: $input, condition: $condition) {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteItemMutation>response.data.deleteItem;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userResidenceId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            userName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userResidenceId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async GetResidence(id: string): Promise<GetResidenceQuery> {
    const statement = `query GetResidence($id: ID!) {
        getResidence(id: $id) {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetResidenceQuery>response.data.getResidence;
  }
  async ListResidences(
    filter?: ModelResidenceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListResidencesQuery> {
    const statement = `query ListResidences($filter: ModelResidenceFilterInput, $limit: Int, $nextToken: String) {
        listResidences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListResidencesQuery>response.data.listResidences;
  }
  async SyncResidences(
    filter?: ModelResidenceFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncResidencesQuery> {
    const statement = `query SyncResidences($filter: ModelResidenceFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncResidences(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncResidencesQuery>response.data.syncResidences;
  }
  async GetPlace(id: string): Promise<GetPlaceQuery> {
    const statement = `query GetPlace($id: ID!) {
        getPlace(id: $id) {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlaceQuery>response.data.getPlace;
  }
  async ListPlaces(
    filter?: ModelPlaceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlacesQuery> {
    const statement = `query ListPlaces($filter: ModelPlaceFilterInput, $limit: Int, $nextToken: String) {
        listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            pName
            residenceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlacesQuery>response.data.listPlaces;
  }
  async SyncPlaces(
    filter?: ModelPlaceFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPlacesQuery> {
    const statement = `query SyncPlaces($filter: ModelPlaceFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPlaces(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            pName
            residenceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPlacesQuery>response.data.syncPlaces;
  }
  async GetContainer(id: string): Promise<GetContainerQuery> {
    const statement = `query GetContainer($id: ID!) {
        getContainer(id: $id) {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetContainerQuery>response.data.getContainer;
  }
  async ListContainers(
    filter?: ModelContainerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContainersQuery> {
    const statement = `query ListContainers($filter: ModelContainerFilterInput, $limit: Int, $nextToken: String) {
        listContainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            cName
            placeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListContainersQuery>response.data.listContainers;
  }
  async SyncContainers(
    filter?: ModelContainerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncContainersQuery> {
    const statement = `query SyncContainers($filter: ModelContainerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncContainers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            cName
            placeID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncContainersQuery>response.data.syncContainers;
  }
  async GetItem(id: string): Promise<GetItemQuery> {
    const statement = `query GetItem($id: ID!) {
        getItem(id: $id) {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetItemQuery>response.data.getItem;
  }
  async ListItems(
    filter?: ModelItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListItemsQuery> {
    const statement = `query ListItems($filter: ModelItemFilterInput, $limit: Int, $nextToken: String) {
        listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            description
            iName
            photo
            containerID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListItemsQuery>response.data.listItems;
  }
  async SyncItems(
    filter?: ModelItemFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncItemsQuery> {
    const statement = `query SyncItems($filter: ModelItemFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncItems(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            description
            iName
            photo
            containerID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncItemsQuery>response.data.syncItems;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  >;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  >;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          userName
          Residence {
            __typename
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userResidenceId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  >;

  OnCreateResidenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateResidence">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateResidence {
        onCreateResidence {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateResidence">>
  >;

  OnUpdateResidenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateResidence">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateResidence {
        onUpdateResidence {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateResidence">>
  >;

  OnDeleteResidenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteResidence">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteResidence {
        onDeleteResidence {
          __typename
          id
          rName
          Places {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteResidence">>
  >;

  OnCreatePlaceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlace">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlace {
        onCreatePlace {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlace">>
  >;

  OnUpdatePlaceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlace">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlace {
        onUpdatePlace {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlace">>
  >;

  OnDeletePlaceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlace">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlace {
        onDeletePlace {
          __typename
          id
          pName
          Containers {
            __typename
            nextToken
            startedAt
          }
          residenceID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlace">>
  >;

  OnCreateContainerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContainer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateContainer {
        onCreateContainer {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateContainer">>
  >;

  OnUpdateContainerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContainer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateContainer {
        onUpdateContainer {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateContainer">>
  >;

  OnDeleteContainerListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContainer">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteContainer {
        onDeleteContainer {
          __typename
          id
          cName
          Items {
            __typename
            nextToken
            startedAt
          }
          placeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteContainer">>
  >;

  OnCreateItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateItem {
        onCreateItem {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateItem">>
  >;

  OnUpdateItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateItem {
        onUpdateItem {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateItem">>
  >;

  OnDeleteItemListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteItem">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteItem {
        onDeleteItem {
          __typename
          id
          description
          iName
          photo
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteItem">>
  >;
}
