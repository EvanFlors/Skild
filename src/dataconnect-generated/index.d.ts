import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateSkillData {
  skill_insert: Skill_Key;
}

export interface CreateSkillVariables {
  authorId: string;
  title: string;
  description: string;
  tags: string[];
  installCommand: string;
  promptConfig: string;
  usageExample: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  clerkId: string;
  email: string;
  username?: string | null;
  image?: string | null;
}

export interface DeleteSkillData {
  skill_delete?: Skill_Key | null;
}

export interface DeleteSkillVariables {
  id: UUIDString;
}

export interface GetSkillsData {
  skills: ({
    id: UUIDString;
    createdAt: TimestampString;
    title: string;
    description: string;
    tags: string[];
    installCommand: string;
    promptConfig: string;
    usageExample: string;
    author: {
      clerkId: string;
      email: string;
      username?: string | null;
      image?: string | null;
    } & User_Key;
  } & Skill_Key)[];
}

export interface GetSkillsVariables {
  limit?: number | null;
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateSkillData {
  skill_update?: Skill_Key | null;
}

export interface UpdateSkillVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  tags?: string[] | null;
  installCommand?: string | null;
  promptConfig?: string | null;
  usageExample?: string | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  clerkId: string;
  email?: string | null;
  username?: string | null;
  image?: string | null;
}

export interface User_Key {
  clerkId: string;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface CreateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillVariables): MutationRef<CreateSkillData, CreateSkillVariables>;
  operationName: string;
}
export const createSkillRef: CreateSkillRef;

export function createSkill(vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;
export function createSkill(dc: DataConnect, vars: CreateSkillVariables): MutationPromise<CreateSkillData, CreateSkillVariables>;

interface UpdateSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSkillVariables): MutationRef<UpdateSkillData, UpdateSkillVariables>;
  operationName: string;
}
export const updateSkillRef: UpdateSkillRef;

export function updateSkill(vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;
export function updateSkill(dc: DataConnect, vars: UpdateSkillVariables): MutationPromise<UpdateSkillData, UpdateSkillVariables>;

interface DeleteSkillRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSkillVariables): MutationRef<DeleteSkillData, DeleteSkillVariables>;
  operationName: string;
}
export const deleteSkillRef: DeleteSkillRef;

export function deleteSkill(vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;
export function deleteSkill(dc: DataConnect, vars: DeleteSkillVariables): MutationPromise<DeleteSkillData, DeleteSkillVariables>;

interface GetSkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetSkillsVariables): QueryRef<GetSkillsData, GetSkillsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetSkillsVariables): QueryRef<GetSkillsData, GetSkillsVariables>;
  operationName: string;
}
export const getSkillsRef: GetSkillsRef;

export function getSkills(vars?: GetSkillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillsData, GetSkillsVariables>;
export function getSkills(dc: DataConnect, vars?: GetSkillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillsData, GetSkillsVariables>;

