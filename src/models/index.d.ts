import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLandingUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly Mob: string;
  readonly Service: string;
  readonly StartDate: string;
  readonly EndDate: string;
  readonly StreetAddress?: string | null;
  readonly City?: string | null;
  readonly pincode: string;
  readonly DateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLandingUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LandingUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly Mob: string;
  readonly Service: string;
  readonly StartDate: string;
  readonly EndDate: string;
  readonly StreetAddress?: string | null;
  readonly City?: string | null;
  readonly pincode: string;
  readonly DateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LandingUser = LazyLoading extends LazyLoadingDisabled ? EagerLandingUser : LazyLandingUser

export declare const LandingUser: (new (init: ModelInit<LandingUser>) => LandingUser) & {
  copyOf(source: LandingUser, mutator: (draft: MutableModel<LandingUser>) => MutableModel<LandingUser> | void): LandingUser;
}