
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BusinessType: {
  PRODUCT: 'PRODUCT',
  SERVICE: 'SERVICE',
  SUBSCRIPTION: 'SUBSCRIPTION',
  PLATFORM: 'PLATFORM',
  LICENSING: 'LICENSING',
  RENTAL: 'RENTAL',
  SHARING: 'SHARING',
  ADVERTISING: 'ADVERTISING',
  IMPACT: 'IMPACT'
};

export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType]


export const BusinessStage: {
  IDEA: 'IDEA',
  CONCEPT: 'CONCEPT',
  MVP: 'MVP',
  VALIDATED: 'VALIDATED',
  GROWTH: 'GROWTH',
  PIVOTING: 'PIVOTING'
};

export type BusinessStage = (typeof BusinessStage)[keyof typeof BusinessStage]


export const BusinessArea: {
  INDUSTRY: 'INDUSTRY',
  COMMERCE: 'COMMERCE',
  SERVICES: 'SERVICES',
  FINANCE: 'FINANCE',
  TOURISM: 'TOURISM',
  MEDIA: 'MEDIA',
  CULTURE: 'CULTURE'
};

export type BusinessArea = (typeof BusinessArea)[keyof typeof BusinessArea]


export const BusinessSubarea: {
  GOODS_PRODUCTION: 'GOODS_PRODUCTION',
  AGRIBUSINESS: 'AGRIBUSINESS',
  MINING: 'MINING',
  CONSTRUCTION: 'CONSTRUCTION',
  OTHER_INDUSTRY: 'OTHER_INDUSTRY',
  RETAIL: 'RETAIL',
  WHOLESALE: 'WHOLESALE',
  FRANCHISE: 'FRANCHISE',
  OTHER_COMMERCE: 'OTHER_COMMERCE',
  HEALTH_WELLNESS: 'HEALTH_WELLNESS',
  EDUCATION: 'EDUCATION',
  CONSULTING: 'CONSULTING',
  TECHNOLOGY: 'TECHNOLOGY',
  LOGISTICS: 'LOGISTICS',
  LEGAL: 'LEGAL',
  SPECIALIZED: 'SPECIALIZED',
  OTHER_SERVICES: 'OTHER_SERVICES',
  BANKING: 'BANKING',
  INSURANCE: 'INSURANCE',
  FINTECH: 'FINTECH',
  STOCK_MARKET: 'STOCK_MARKET',
  OTHER_FINANCE: 'OTHER_FINANCE',
  HOSPITALITY: 'HOSPITALITY',
  FOOD: 'FOOD',
  TRAVEL_AGENCY: 'TRAVEL_AGENCY',
  EVENTS: 'EVENTS',
  OTHER_TOURISM: 'OTHER_TOURISM',
  ADVERTISING: 'ADVERTISING',
  AUDIOVISUAL: 'AUDIOVISUAL',
  JOURNALISM: 'JOURNALISM',
  DIGITAL_PLATFORMS: 'DIGITAL_PLATFORMS',
  INFO_MANAGEMENT: 'INFO_MANAGEMENT',
  PR: 'PR',
  OTHER_MEDIA: 'OTHER_MEDIA',
  ART_PRODUCTION: 'ART_PRODUCTION',
  LITERATURE: 'LITERATURE',
  MUSIC_AUDIO: 'MUSIC_AUDIO',
  PERFORMING_ARTS: 'PERFORMING_ARTS',
  HERITAGE: 'HERITAGE',
  CREATIVE_INDUSTRY: 'CREATIVE_INDUSTRY',
  OTHER_CULTURE: 'OTHER_CULTURE'
};

export type BusinessSubarea = (typeof BusinessSubarea)[keyof typeof BusinessSubarea]


export const ModelType: {
  B2B: 'B2B',
  B2C: 'B2C',
  B2G: 'B2G',
  C2C: 'C2C',
  C2B: 'C2B',
  B2B2C: 'B2B2C',
  G2C: 'G2C'
};

export type ModelType = (typeof ModelType)[keyof typeof ModelType]


export const CampaignStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]


export const RepaymentUnit: {
  WEEKS: 'WEEKS',
  MONTHS: 'MONTHS',
  YEARS: 'YEARS'
};

export type RepaymentUnit = (typeof RepaymentUnit)[keyof typeof RepaymentUnit]


export const PaymentFrequency: {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  BIMONTHLY: 'BIMONTHLY',
  QUARTERLY: 'QUARTERLY',
  FOURMONTHLY: 'FOURMONTHLY',
  SEMIANNUAL: 'SEMIANNUAL',
  ANNUAL: 'ANNUAL',
  NONE: 'NONE'
};

export type PaymentFrequency = (typeof PaymentFrequency)[keyof typeof PaymentFrequency]


export const InterestType: {
  FIXED: 'FIXED',
  VARIABLE: 'VARIABLE',
  MIXED: 'MIXED',
  NONE: 'NONE'
};

export type InterestType = (typeof InterestType)[keyof typeof InterestType]


export const DocType: {
  CC: 'CC',
  PASSPORT: 'PASSPORT'
};

export type DocType = (typeof DocType)[keyof typeof DocType]


export const ProductPlan: {
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM'
};

export type ProductPlan = (typeof ProductPlan)[keyof typeof ProductPlan]

}

export type BusinessType = $Enums.BusinessType

export const BusinessType: typeof $Enums.BusinessType

export type BusinessStage = $Enums.BusinessStage

export const BusinessStage: typeof $Enums.BusinessStage

export type BusinessArea = $Enums.BusinessArea

export const BusinessArea: typeof $Enums.BusinessArea

export type BusinessSubarea = $Enums.BusinessSubarea

export const BusinessSubarea: typeof $Enums.BusinessSubarea

export type ModelType = $Enums.ModelType

export const ModelType: typeof $Enums.ModelType

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

export type RepaymentUnit = $Enums.RepaymentUnit

export const RepaymentUnit: typeof $Enums.RepaymentUnit

export type PaymentFrequency = $Enums.PaymentFrequency

export const PaymentFrequency: typeof $Enums.PaymentFrequency

export type InterestType = $Enums.InterestType

export const InterestType: typeof $Enums.InterestType

export type DocType = $Enums.DocType

export const DocType: typeof $Enums.DocType

export type ProductPlan = $Enums.ProductPlan

export const ProductPlan: typeof $Enums.ProductPlan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Campaign: 'Campaign',
    Investment: 'Investment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "campaign" | "investment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    campaign?: CampaignOmit
    investment?: InvestmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    campaigns: number
    investments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    investments?: boolean | UserCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    investments: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investments?: boolean | CampaignCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    surnames: string | null
    password: string | null
    productPlan: $Enums.ProductPlan | null
    emailVerified: boolean | null
    rememberToken: string | null
    nif: string | null
    identificationDocType: $Enums.DocType | null
    identificationDocNumber: string | null
    docExpiry: Date | null
    address: string | null
    postalCode: string | null
    iban: string | null
    paypalEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    surnames: string | null
    password: string | null
    productPlan: $Enums.ProductPlan | null
    emailVerified: boolean | null
    rememberToken: string | null
    nif: string | null
    identificationDocType: $Enums.DocType | null
    identificationDocNumber: string | null
    docExpiry: Date | null
    address: string | null
    postalCode: string | null
    iban: string | null
    paypalEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    surnames: number
    password: number
    productPlan: number
    emailVerified: number
    rememberToken: number
    nif: number
    identificationDocType: number
    identificationDocNumber: number
    docExpiry: number
    address: number
    postalCode: number
    iban: number
    paypalEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surnames?: true
    password?: true
    productPlan?: true
    emailVerified?: true
    rememberToken?: true
    nif?: true
    identificationDocType?: true
    identificationDocNumber?: true
    docExpiry?: true
    address?: true
    postalCode?: true
    iban?: true
    paypalEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surnames?: true
    password?: true
    productPlan?: true
    emailVerified?: true
    rememberToken?: true
    nif?: true
    identificationDocType?: true
    identificationDocNumber?: true
    docExpiry?: true
    address?: true
    postalCode?: true
    iban?: true
    paypalEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    surnames?: true
    password?: true
    productPlan?: true
    emailVerified?: true
    rememberToken?: true
    nif?: true
    identificationDocType?: true
    identificationDocNumber?: true
    docExpiry?: true
    address?: true
    postalCode?: true
    iban?: true
    paypalEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    surnames: string | null
    password: string
    productPlan: $Enums.ProductPlan | null
    emailVerified: boolean | null
    rememberToken: string | null
    nif: string | null
    identificationDocType: $Enums.DocType | null
    identificationDocNumber: string | null
    docExpiry: Date | null
    address: string | null
    postalCode: string | null
    iban: string | null
    paypalEmail: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surnames?: boolean
    password?: boolean
    productPlan?: boolean
    emailVerified?: boolean
    rememberToken?: boolean
    nif?: boolean
    identificationDocType?: boolean
    identificationDocNumber?: boolean
    docExpiry?: boolean
    address?: boolean
    postalCode?: boolean
    iban?: boolean
    paypalEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surnames?: boolean
    password?: boolean
    productPlan?: boolean
    emailVerified?: boolean
    rememberToken?: boolean
    nif?: boolean
    identificationDocType?: boolean
    identificationDocNumber?: boolean
    docExpiry?: boolean
    address?: boolean
    postalCode?: boolean
    iban?: boolean
    paypalEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    surnames?: boolean
    password?: boolean
    productPlan?: boolean
    emailVerified?: boolean
    rememberToken?: boolean
    nif?: boolean
    identificationDocType?: boolean
    identificationDocNumber?: boolean
    docExpiry?: boolean
    address?: boolean
    postalCode?: boolean
    iban?: boolean
    paypalEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    surnames?: boolean
    password?: boolean
    productPlan?: boolean
    emailVerified?: boolean
    rememberToken?: boolean
    nif?: boolean
    identificationDocType?: boolean
    identificationDocNumber?: boolean
    docExpiry?: boolean
    address?: boolean
    postalCode?: boolean
    iban?: boolean
    paypalEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "surnames" | "password" | "productPlan" | "emailVerified" | "rememberToken" | "nif" | "identificationDocType" | "identificationDocNumber" | "docExpiry" | "address" | "postalCode" | "iban" | "paypalEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    investments?: boolean | User$investmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      surnames: string | null
      password: string
      productPlan: $Enums.ProductPlan | null
      emailVerified: boolean | null
      rememberToken: string | null
      nif: string | null
      identificationDocType: $Enums.DocType | null
      identificationDocNumber: string | null
      docExpiry: Date | null
      address: string | null
      postalCode: string | null
      iban: string | null
      paypalEmail: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    investments<T extends User$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surnames: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly productPlan: FieldRef<"User", 'ProductPlan'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly rememberToken: FieldRef<"User", 'String'>
    readonly nif: FieldRef<"User", 'String'>
    readonly identificationDocType: FieldRef<"User", 'DocType'>
    readonly identificationDocNumber: FieldRef<"User", 'String'>
    readonly docExpiry: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly postalCode: FieldRef<"User", 'String'>
    readonly iban: FieldRef<"User", 'String'>
    readonly paypalEmail: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.investments
   */
  export type User$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    targetValue: number | null
    repaymentPeriod: number | null
    gracePeriod: number | null
    interestRate: number | null
  }

  export type CampaignSumAggregateOutputType = {
    targetValue: number | null
    repaymentPeriod: number | null
    gracePeriod: number | null
    interestRate: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    description: string | null
    userId: string | null
    businessType: $Enums.BusinessType | null
    businessArea: $Enums.BusinessArea | null
    businessSubarea: $Enums.BusinessSubarea | null
    stage: $Enums.BusinessStage | null
    modelType: $Enums.ModelType | null
    capitalPlan: string | null
    targetValue: number | null
    repaymentPeriod: number | null
    repaymentUnit: $Enums.RepaymentUnit | null
    paymentFrequency: $Enums.PaymentFrequency | null
    gracePeriod: number | null
    interestType: $Enums.InterestType | null
    interestRate: number | null
    euriborIndexed: boolean | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    description: string | null
    userId: string | null
    businessType: $Enums.BusinessType | null
    businessArea: $Enums.BusinessArea | null
    businessSubarea: $Enums.BusinessSubarea | null
    stage: $Enums.BusinessStage | null
    modelType: $Enums.ModelType | null
    capitalPlan: string | null
    targetValue: number | null
    repaymentPeriod: number | null
    repaymentUnit: $Enums.RepaymentUnit | null
    paymentFrequency: $Enums.PaymentFrequency | null
    gracePeriod: number | null
    interestType: $Enums.InterestType | null
    interestRate: number | null
    euriborIndexed: boolean | null
    status: $Enums.CampaignStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    email: number
    description: number
    userId: number
    businessType: number
    businessArea: number
    businessSubarea: number
    stage: number
    modelType: number
    capitalPlan: number
    pitchLinks: number
    mediaUrls: number
    pitchDeckFiles: number
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: number
    paymentFrequency: number
    gracePeriod: number
    interestType: number
    interestRate: number
    euriborIndexed: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    targetValue?: true
    repaymentPeriod?: true
    gracePeriod?: true
    interestRate?: true
  }

  export type CampaignSumAggregateInputType = {
    targetValue?: true
    repaymentPeriod?: true
    gracePeriod?: true
    interestRate?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    userId?: true
    businessType?: true
    businessArea?: true
    businessSubarea?: true
    stage?: true
    modelType?: true
    capitalPlan?: true
    targetValue?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    paymentFrequency?: true
    gracePeriod?: true
    interestType?: true
    interestRate?: true
    euriborIndexed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    userId?: true
    businessType?: true
    businessArea?: true
    businessSubarea?: true
    stage?: true
    modelType?: true
    capitalPlan?: true
    targetValue?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    paymentFrequency?: true
    gracePeriod?: true
    interestType?: true
    interestRate?: true
    euriborIndexed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    userId?: true
    businessType?: true
    businessArea?: true
    businessSubarea?: true
    stage?: true
    modelType?: true
    capitalPlan?: true
    pitchLinks?: true
    mediaUrls?: true
    pitchDeckFiles?: true
    targetValue?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    paymentFrequency?: true
    gracePeriod?: true
    interestType?: true
    interestRate?: true
    euriborIndexed?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    email: string
    description: string | null
    userId: string
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType: $Enums.ModelType | null
    capitalPlan: string | null
    pitchLinks: string[]
    mediaUrls: string[]
    pitchDeckFiles: string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod: number | null
    interestType: $Enums.InterestType
    interestRate: number | null
    euriborIndexed: boolean | null
    status: $Enums.CampaignStatus
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    userId?: boolean
    businessType?: boolean
    businessArea?: boolean
    businessSubarea?: boolean
    stage?: boolean
    modelType?: boolean
    capitalPlan?: boolean
    pitchLinks?: boolean
    mediaUrls?: boolean
    pitchDeckFiles?: boolean
    targetValue?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    paymentFrequency?: boolean
    gracePeriod?: boolean
    interestType?: boolean
    interestRate?: boolean
    euriborIndexed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | Campaign$investmentsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    userId?: boolean
    businessType?: boolean
    businessArea?: boolean
    businessSubarea?: boolean
    stage?: boolean
    modelType?: boolean
    capitalPlan?: boolean
    pitchLinks?: boolean
    mediaUrls?: boolean
    pitchDeckFiles?: boolean
    targetValue?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    paymentFrequency?: boolean
    gracePeriod?: boolean
    interestType?: boolean
    interestRate?: boolean
    euriborIndexed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    userId?: boolean
    businessType?: boolean
    businessArea?: boolean
    businessSubarea?: boolean
    stage?: boolean
    modelType?: boolean
    capitalPlan?: boolean
    pitchLinks?: boolean
    mediaUrls?: boolean
    pitchDeckFiles?: boolean
    targetValue?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    paymentFrequency?: boolean
    gracePeriod?: boolean
    interestType?: boolean
    interestRate?: boolean
    euriborIndexed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    userId?: boolean
    businessType?: boolean
    businessArea?: boolean
    businessSubarea?: boolean
    stage?: boolean
    modelType?: boolean
    capitalPlan?: boolean
    pitchLinks?: boolean
    mediaUrls?: boolean
    pitchDeckFiles?: boolean
    targetValue?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    paymentFrequency?: boolean
    gracePeriod?: boolean
    interestType?: boolean
    interestRate?: boolean
    euriborIndexed?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "description" | "userId" | "businessType" | "businessArea" | "businessSubarea" | "stage" | "modelType" | "capitalPlan" | "pitchLinks" | "mediaUrls" | "pitchDeckFiles" | "targetValue" | "repaymentPeriod" | "repaymentUnit" | "paymentFrequency" | "gracePeriod" | "interestType" | "interestRate" | "euriborIndexed" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    investments?: boolean | Campaign$investmentsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      investments: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      description: string | null
      userId: string
      businessType: $Enums.BusinessType
      businessArea: $Enums.BusinessArea
      businessSubarea: $Enums.BusinessSubarea
      stage: $Enums.BusinessStage
      modelType: $Enums.ModelType | null
      capitalPlan: string | null
      pitchLinks: string[]
      mediaUrls: string[]
      pitchDeckFiles: string[]
      targetValue: number
      repaymentPeriod: number
      repaymentUnit: $Enums.RepaymentUnit
      paymentFrequency: $Enums.PaymentFrequency
      gracePeriod: number | null
      interestType: $Enums.InterestType
      interestRate: number | null
      euriborIndexed: boolean | null
      status: $Enums.CampaignStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investments<T extends Campaign$investmentsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$investmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly email: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly userId: FieldRef<"Campaign", 'String'>
    readonly businessType: FieldRef<"Campaign", 'BusinessType'>
    readonly businessArea: FieldRef<"Campaign", 'BusinessArea'>
    readonly businessSubarea: FieldRef<"Campaign", 'BusinessSubarea'>
    readonly stage: FieldRef<"Campaign", 'BusinessStage'>
    readonly modelType: FieldRef<"Campaign", 'ModelType'>
    readonly capitalPlan: FieldRef<"Campaign", 'String'>
    readonly pitchLinks: FieldRef<"Campaign", 'String[]'>
    readonly mediaUrls: FieldRef<"Campaign", 'String[]'>
    readonly pitchDeckFiles: FieldRef<"Campaign", 'String[]'>
    readonly targetValue: FieldRef<"Campaign", 'Int'>
    readonly repaymentPeriod: FieldRef<"Campaign", 'Int'>
    readonly repaymentUnit: FieldRef<"Campaign", 'RepaymentUnit'>
    readonly paymentFrequency: FieldRef<"Campaign", 'PaymentFrequency'>
    readonly gracePeriod: FieldRef<"Campaign", 'Int'>
    readonly interestType: FieldRef<"Campaign", 'InterestType'>
    readonly interestRate: FieldRef<"Campaign", 'Float'>
    readonly euriborIndexed: FieldRef<"Campaign", 'Boolean'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.investments
   */
  export type Campaign$investmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    amount: number | null
    interestRate: number | null
    repaymentPeriod: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    amount: number | null
    interestRate: number | null
    repaymentPeriod: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    investorId: string | null
    amount: number | null
    interestRate: number | null
    repaymentPlan: string | null
    paymentFrequency: $Enums.PaymentFrequency | null
    repaymentPeriod: number | null
    repaymentUnit: $Enums.RepaymentUnit | null
    interestType: $Enums.InterestType | null
    createdAt: Date | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    investorId: string | null
    amount: number | null
    interestRate: number | null
    repaymentPlan: string | null
    paymentFrequency: $Enums.PaymentFrequency | null
    repaymentPeriod: number | null
    repaymentUnit: $Enums.RepaymentUnit | null
    interestType: $Enums.InterestType | null
    createdAt: Date | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    campaignId: number
    investorId: number
    amount: number
    interestRate: number
    repaymentPlan: number
    paymentFrequency: number
    repaymentPeriod: number
    repaymentUnit: number
    interestType: number
    createdAt: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    amount?: true
    interestRate?: true
    repaymentPeriod?: true
  }

  export type InvestmentSumAggregateInputType = {
    amount?: true
    interestRate?: true
    repaymentPeriod?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    campaignId?: true
    investorId?: true
    amount?: true
    interestRate?: true
    repaymentPlan?: true
    paymentFrequency?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    interestType?: true
    createdAt?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    campaignId?: true
    investorId?: true
    amount?: true
    interestRate?: true
    repaymentPlan?: true
    paymentFrequency?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    interestType?: true
    createdAt?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    campaignId?: true
    investorId?: true
    amount?: true
    interestRate?: true
    repaymentPlan?: true
    paymentFrequency?: true
    repaymentPeriod?: true
    repaymentUnit?: true
    interestType?: true
    createdAt?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    campaignId: string
    investorId: string
    amount: number
    interestRate: number
    repaymentPlan: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt: Date
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    investorId?: boolean
    amount?: boolean
    interestRate?: boolean
    repaymentPlan?: boolean
    paymentFrequency?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    interestType?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    investorId?: boolean
    amount?: boolean
    interestRate?: boolean
    repaymentPlan?: boolean
    paymentFrequency?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    interestType?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    investorId?: boolean
    amount?: boolean
    interestRate?: boolean
    repaymentPlan?: boolean
    paymentFrequency?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    interestType?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    campaignId?: boolean
    investorId?: boolean
    amount?: boolean
    interestRate?: boolean
    repaymentPlan?: boolean
    paymentFrequency?: boolean
    repaymentPeriod?: boolean
    repaymentUnit?: boolean
    interestType?: boolean
    createdAt?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "investorId" | "amount" | "interestRate" | "repaymentPlan" | "paymentFrequency" | "repaymentPeriod" | "repaymentUnit" | "interestType" | "createdAt", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    investor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      investor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      investorId: string
      amount: number
      interestRate: number
      repaymentPlan: string | null
      paymentFrequency: $Enums.PaymentFrequency
      repaymentPeriod: number
      repaymentUnit: $Enums.RepaymentUnit
      interestType: $Enums.InterestType
      createdAt: Date
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly campaignId: FieldRef<"Investment", 'String'>
    readonly investorId: FieldRef<"Investment", 'String'>
    readonly amount: FieldRef<"Investment", 'Int'>
    readonly interestRate: FieldRef<"Investment", 'Float'>
    readonly repaymentPlan: FieldRef<"Investment", 'String'>
    readonly paymentFrequency: FieldRef<"Investment", 'PaymentFrequency'>
    readonly repaymentPeriod: FieldRef<"Investment", 'Int'>
    readonly repaymentUnit: FieldRef<"Investment", 'RepaymentUnit'>
    readonly interestType: FieldRef<"Investment", 'InterestType'>
    readonly createdAt: FieldRef<"Investment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    surnames: 'surnames',
    password: 'password',
    productPlan: 'productPlan',
    emailVerified: 'emailVerified',
    rememberToken: 'rememberToken',
    nif: 'nif',
    identificationDocType: 'identificationDocType',
    identificationDocNumber: 'identificationDocNumber',
    docExpiry: 'docExpiry',
    address: 'address',
    postalCode: 'postalCode',
    iban: 'iban',
    paypalEmail: 'paypalEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    description: 'description',
    userId: 'userId',
    businessType: 'businessType',
    businessArea: 'businessArea',
    businessSubarea: 'businessSubarea',
    stage: 'stage',
    modelType: 'modelType',
    capitalPlan: 'capitalPlan',
    pitchLinks: 'pitchLinks',
    mediaUrls: 'mediaUrls',
    pitchDeckFiles: 'pitchDeckFiles',
    targetValue: 'targetValue',
    repaymentPeriod: 'repaymentPeriod',
    repaymentUnit: 'repaymentUnit',
    paymentFrequency: 'paymentFrequency',
    gracePeriod: 'gracePeriod',
    interestType: 'interestType',
    interestRate: 'interestRate',
    euriborIndexed: 'euriborIndexed',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    investorId: 'investorId',
    amount: 'amount',
    interestRate: 'interestRate',
    repaymentPlan: 'repaymentPlan',
    paymentFrequency: 'paymentFrequency',
    repaymentPeriod: 'repaymentPeriod',
    repaymentUnit: 'repaymentUnit',
    interestType: 'interestType',
    createdAt: 'createdAt'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProductPlan'
   */
  export type EnumProductPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductPlan'>
    


  /**
   * Reference to a field of type 'ProductPlan[]'
   */
  export type ListEnumProductPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductPlan[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DocType'
   */
  export type EnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType'>
    


  /**
   * Reference to a field of type 'DocType[]'
   */
  export type ListEnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BusinessType'
   */
  export type EnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType'>
    


  /**
   * Reference to a field of type 'BusinessType[]'
   */
  export type ListEnumBusinessTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessType[]'>
    


  /**
   * Reference to a field of type 'BusinessArea'
   */
  export type EnumBusinessAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessArea'>
    


  /**
   * Reference to a field of type 'BusinessArea[]'
   */
  export type ListEnumBusinessAreaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessArea[]'>
    


  /**
   * Reference to a field of type 'BusinessSubarea'
   */
  export type EnumBusinessSubareaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessSubarea'>
    


  /**
   * Reference to a field of type 'BusinessSubarea[]'
   */
  export type ListEnumBusinessSubareaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessSubarea[]'>
    


  /**
   * Reference to a field of type 'BusinessStage'
   */
  export type EnumBusinessStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStage'>
    


  /**
   * Reference to a field of type 'BusinessStage[]'
   */
  export type ListEnumBusinessStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BusinessStage[]'>
    


  /**
   * Reference to a field of type 'ModelType'
   */
  export type EnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType'>
    


  /**
   * Reference to a field of type 'ModelType[]'
   */
  export type ListEnumModelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RepaymentUnit'
   */
  export type EnumRepaymentUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepaymentUnit'>
    


  /**
   * Reference to a field of type 'RepaymentUnit[]'
   */
  export type ListEnumRepaymentUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepaymentUnit[]'>
    


  /**
   * Reference to a field of type 'PaymentFrequency'
   */
  export type EnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency'>
    


  /**
   * Reference to a field of type 'PaymentFrequency[]'
   */
  export type ListEnumPaymentFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentFrequency[]'>
    


  /**
   * Reference to a field of type 'InterestType'
   */
  export type EnumInterestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestType'>
    


  /**
   * Reference to a field of type 'InterestType[]'
   */
  export type ListEnumInterestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InterestType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus[]'
   */
  export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surnames?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    productPlan?: EnumProductPlanNullableFilter<"User"> | $Enums.ProductPlan | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    rememberToken?: StringNullableFilter<"User"> | string | null
    nif?: StringNullableFilter<"User"> | string | null
    identificationDocType?: EnumDocTypeNullableFilter<"User"> | $Enums.DocType | null
    identificationDocNumber?: StringNullableFilter<"User"> | string | null
    docExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    iban?: StringNullableFilter<"User"> | string | null
    paypalEmail?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    campaigns?: CampaignListRelationFilter
    investments?: InvestmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surnames?: SortOrderInput | SortOrder
    password?: SortOrder
    productPlan?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    nif?: SortOrderInput | SortOrder
    identificationDocType?: SortOrderInput | SortOrder
    identificationDocNumber?: SortOrderInput | SortOrder
    docExpiry?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    paypalEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaigns?: CampaignOrderByRelationAggregateInput
    investments?: InvestmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    surnames?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    productPlan?: EnumProductPlanNullableFilter<"User"> | $Enums.ProductPlan | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    rememberToken?: StringNullableFilter<"User"> | string | null
    nif?: StringNullableFilter<"User"> | string | null
    identificationDocType?: EnumDocTypeNullableFilter<"User"> | $Enums.DocType | null
    identificationDocNumber?: StringNullableFilter<"User"> | string | null
    docExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringNullableFilter<"User"> | string | null
    postalCode?: StringNullableFilter<"User"> | string | null
    iban?: StringNullableFilter<"User"> | string | null
    paypalEmail?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    campaigns?: CampaignListRelationFilter
    investments?: InvestmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surnames?: SortOrderInput | SortOrder
    password?: SortOrder
    productPlan?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    nif?: SortOrderInput | SortOrder
    identificationDocType?: SortOrderInput | SortOrder
    identificationDocNumber?: SortOrderInput | SortOrder
    docExpiry?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    paypalEmail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surnames?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    productPlan?: EnumProductPlanNullableWithAggregatesFilter<"User"> | $Enums.ProductPlan | null
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    rememberToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    nif?: StringNullableWithAggregatesFilter<"User"> | string | null
    identificationDocType?: EnumDocTypeNullableWithAggregatesFilter<"User"> | $Enums.DocType | null
    identificationDocNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    docExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    iban?: StringNullableWithAggregatesFilter<"User"> | string | null
    paypalEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    email?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    userId?: StringFilter<"Campaign"> | string
    businessType?: EnumBusinessTypeFilter<"Campaign"> | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFilter<"Campaign"> | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFilter<"Campaign"> | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFilter<"Campaign"> | $Enums.BusinessStage
    modelType?: EnumModelTypeNullableFilter<"Campaign"> | $Enums.ModelType | null
    capitalPlan?: StringNullableFilter<"Campaign"> | string | null
    pitchLinks?: StringNullableListFilter<"Campaign">
    mediaUrls?: StringNullableListFilter<"Campaign">
    pitchDeckFiles?: StringNullableListFilter<"Campaign">
    targetValue?: IntFilter<"Campaign"> | number
    repaymentPeriod?: IntFilter<"Campaign"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Campaign"> | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFilter<"Campaign"> | $Enums.PaymentFrequency
    gracePeriod?: IntNullableFilter<"Campaign"> | number | null
    interestType?: EnumInterestTypeFilter<"Campaign"> | $Enums.InterestType
    interestRate?: FloatNullableFilter<"Campaign"> | number | null
    euriborIndexed?: BoolNullableFilter<"Campaign"> | boolean | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    businessType?: SortOrder
    businessArea?: SortOrder
    businessSubarea?: SortOrder
    stage?: SortOrder
    modelType?: SortOrderInput | SortOrder
    capitalPlan?: SortOrderInput | SortOrder
    pitchLinks?: SortOrder
    mediaUrls?: SortOrder
    pitchDeckFiles?: SortOrder
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    paymentFrequency?: SortOrder
    gracePeriod?: SortOrderInput | SortOrder
    interestType?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    euriborIndexed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    investments?: InvestmentOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    email?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    userId?: StringFilter<"Campaign"> | string
    businessType?: EnumBusinessTypeFilter<"Campaign"> | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFilter<"Campaign"> | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFilter<"Campaign"> | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFilter<"Campaign"> | $Enums.BusinessStage
    modelType?: EnumModelTypeNullableFilter<"Campaign"> | $Enums.ModelType | null
    capitalPlan?: StringNullableFilter<"Campaign"> | string | null
    pitchLinks?: StringNullableListFilter<"Campaign">
    mediaUrls?: StringNullableListFilter<"Campaign">
    pitchDeckFiles?: StringNullableListFilter<"Campaign">
    targetValue?: IntFilter<"Campaign"> | number
    repaymentPeriod?: IntFilter<"Campaign"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Campaign"> | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFilter<"Campaign"> | $Enums.PaymentFrequency
    gracePeriod?: IntNullableFilter<"Campaign"> | number | null
    interestType?: EnumInterestTypeFilter<"Campaign"> | $Enums.InterestType
    interestRate?: FloatNullableFilter<"Campaign"> | number | null
    euriborIndexed?: BoolNullableFilter<"Campaign"> | boolean | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    investments?: InvestmentListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrder
    businessType?: SortOrder
    businessArea?: SortOrder
    businessSubarea?: SortOrder
    stage?: SortOrder
    modelType?: SortOrderInput | SortOrder
    capitalPlan?: SortOrderInput | SortOrder
    pitchLinks?: SortOrder
    mediaUrls?: SortOrder
    pitchDeckFiles?: SortOrder
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    paymentFrequency?: SortOrder
    gracePeriod?: SortOrderInput | SortOrder
    interestType?: SortOrder
    interestRate?: SortOrderInput | SortOrder
    euriborIndexed?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    email?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    userId?: StringWithAggregatesFilter<"Campaign"> | string
    businessType?: EnumBusinessTypeWithAggregatesFilter<"Campaign"> | $Enums.BusinessType
    businessArea?: EnumBusinessAreaWithAggregatesFilter<"Campaign"> | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaWithAggregatesFilter<"Campaign"> | $Enums.BusinessSubarea
    stage?: EnumBusinessStageWithAggregatesFilter<"Campaign"> | $Enums.BusinessStage
    modelType?: EnumModelTypeNullableWithAggregatesFilter<"Campaign"> | $Enums.ModelType | null
    capitalPlan?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    pitchLinks?: StringNullableListFilter<"Campaign">
    mediaUrls?: StringNullableListFilter<"Campaign">
    pitchDeckFiles?: StringNullableListFilter<"Campaign">
    targetValue?: IntWithAggregatesFilter<"Campaign"> | number
    repaymentPeriod?: IntWithAggregatesFilter<"Campaign"> | number
    repaymentUnit?: EnumRepaymentUnitWithAggregatesFilter<"Campaign"> | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyWithAggregatesFilter<"Campaign"> | $Enums.PaymentFrequency
    gracePeriod?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    interestType?: EnumInterestTypeWithAggregatesFilter<"Campaign"> | $Enums.InterestType
    interestRate?: FloatNullableWithAggregatesFilter<"Campaign"> | number | null
    euriborIndexed?: BoolNullableWithAggregatesFilter<"Campaign"> | boolean | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    campaignId?: StringFilter<"Investment"> | string
    investorId?: StringFilter<"Investment"> | string
    amount?: IntFilter<"Investment"> | number
    interestRate?: FloatFilter<"Investment"> | number
    repaymentPlan?: StringNullableFilter<"Investment"> | string | null
    paymentFrequency?: EnumPaymentFrequencyFilter<"Investment"> | $Enums.PaymentFrequency
    repaymentPeriod?: IntFilter<"Investment"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Investment"> | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFilter<"Investment"> | $Enums.InterestType
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    investor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    investorId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPlan?: SortOrderInput | SortOrder
    paymentFrequency?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    interestType?: SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    investor?: UserOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    campaignId?: StringFilter<"Investment"> | string
    investorId?: StringFilter<"Investment"> | string
    amount?: IntFilter<"Investment"> | number
    interestRate?: FloatFilter<"Investment"> | number
    repaymentPlan?: StringNullableFilter<"Investment"> | string | null
    paymentFrequency?: EnumPaymentFrequencyFilter<"Investment"> | $Enums.PaymentFrequency
    repaymentPeriod?: IntFilter<"Investment"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Investment"> | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFilter<"Investment"> | $Enums.InterestType
    createdAt?: DateTimeFilter<"Investment"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    investor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    investorId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPlan?: SortOrderInput | SortOrder
    paymentFrequency?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    interestType?: SortOrder
    createdAt?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    campaignId?: StringWithAggregatesFilter<"Investment"> | string
    investorId?: StringWithAggregatesFilter<"Investment"> | string
    amount?: IntWithAggregatesFilter<"Investment"> | number
    interestRate?: FloatWithAggregatesFilter<"Investment"> | number
    repaymentPlan?: StringNullableWithAggregatesFilter<"Investment"> | string | null
    paymentFrequency?: EnumPaymentFrequencyWithAggregatesFilter<"Investment"> | $Enums.PaymentFrequency
    repaymentPeriod?: IntWithAggregatesFilter<"Investment"> | number
    repaymentUnit?: EnumRepaymentUnitWithAggregatesFilter<"Investment"> | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeWithAggregatesFilter<"Investment"> | $Enums.InterestType
    createdAt?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
    investments?: InvestmentCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    userId: string
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    investments?: InvestmentUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    userId: string
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateInput = {
    id?: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutInvestmentsInput
    investor: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    campaignId: string
    investorId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutInvestmentsNestedInput
    investor?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    campaignId: string
    investorId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProductPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductPlan | EnumProductPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductPlanNullableFilter<$PrismaModel> | $Enums.ProductPlan | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumDocTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableFilter<$PrismaModel> | $Enums.DocType | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surnames?: SortOrder
    password?: SortOrder
    productPlan?: SortOrder
    emailVerified?: SortOrder
    rememberToken?: SortOrder
    nif?: SortOrder
    identificationDocType?: SortOrder
    identificationDocNumber?: SortOrder
    docExpiry?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    iban?: SortOrder
    paypalEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surnames?: SortOrder
    password?: SortOrder
    productPlan?: SortOrder
    emailVerified?: SortOrder
    rememberToken?: SortOrder
    nif?: SortOrder
    identificationDocType?: SortOrder
    identificationDocNumber?: SortOrder
    docExpiry?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    iban?: SortOrder
    paypalEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surnames?: SortOrder
    password?: SortOrder
    productPlan?: SortOrder
    emailVerified?: SortOrder
    rememberToken?: SortOrder
    nif?: SortOrder
    identificationDocType?: SortOrder
    identificationDocNumber?: SortOrder
    docExpiry?: SortOrder
    address?: SortOrder
    postalCode?: SortOrder
    iban?: SortOrder
    paypalEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProductPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductPlan | EnumProductPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumProductPlanNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumDocTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDocTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type EnumBusinessAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessArea | EnumBusinessAreaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessAreaFilter<$PrismaModel> | $Enums.BusinessArea
  }

  export type EnumBusinessSubareaFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessSubarea | EnumBusinessSubareaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessSubareaFilter<$PrismaModel> | $Enums.BusinessSubarea
  }

  export type EnumBusinessStageFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStage | EnumBusinessStageFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStageFilter<$PrismaModel> | $Enums.BusinessStage
  }

  export type EnumModelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTypeNullableFilter<$PrismaModel> | $Enums.ModelType | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRepaymentUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.RepaymentUnit | EnumRepaymentUnitFieldRefInput<$PrismaModel>
    in?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumRepaymentUnitFilter<$PrismaModel> | $Enums.RepaymentUnit
  }

  export type EnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumInterestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestType | EnumInterestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterestTypeFilter<$PrismaModel> | $Enums.InterestType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    businessType?: SortOrder
    businessArea?: SortOrder
    businessSubarea?: SortOrder
    stage?: SortOrder
    modelType?: SortOrder
    capitalPlan?: SortOrder
    pitchLinks?: SortOrder
    mediaUrls?: SortOrder
    pitchDeckFiles?: SortOrder
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    paymentFrequency?: SortOrder
    gracePeriod?: SortOrder
    interestType?: SortOrder
    interestRate?: SortOrder
    euriborIndexed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    gracePeriod?: SortOrder
    interestRate?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    businessType?: SortOrder
    businessArea?: SortOrder
    businessSubarea?: SortOrder
    stage?: SortOrder
    modelType?: SortOrder
    capitalPlan?: SortOrder
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    paymentFrequency?: SortOrder
    gracePeriod?: SortOrder
    interestType?: SortOrder
    interestRate?: SortOrder
    euriborIndexed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    businessType?: SortOrder
    businessArea?: SortOrder
    businessSubarea?: SortOrder
    stage?: SortOrder
    modelType?: SortOrder
    capitalPlan?: SortOrder
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    paymentFrequency?: SortOrder
    gracePeriod?: SortOrder
    interestType?: SortOrder
    interestRate?: SortOrder
    euriborIndexed?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    targetValue?: SortOrder
    repaymentPeriod?: SortOrder
    gracePeriod?: SortOrder
    interestRate?: SortOrder
  }

  export type EnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type EnumBusinessAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessArea | EnumBusinessAreaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessAreaWithAggregatesFilter<$PrismaModel> | $Enums.BusinessArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessAreaFilter<$PrismaModel>
    _max?: NestedEnumBusinessAreaFilter<$PrismaModel>
  }

  export type EnumBusinessSubareaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessSubarea | EnumBusinessSubareaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessSubareaWithAggregatesFilter<$PrismaModel> | $Enums.BusinessSubarea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessSubareaFilter<$PrismaModel>
    _max?: NestedEnumBusinessSubareaFilter<$PrismaModel>
  }

  export type EnumBusinessStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStage | EnumBusinessStageFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStageWithAggregatesFilter<$PrismaModel> | $Enums.BusinessStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessStageFilter<$PrismaModel>
    _max?: NestedEnumBusinessStageFilter<$PrismaModel>
  }

  export type EnumModelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumModelTypeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRepaymentUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepaymentUnit | EnumRepaymentUnitFieldRefInput<$PrismaModel>
    in?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumRepaymentUnitWithAggregatesFilter<$PrismaModel> | $Enums.RepaymentUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepaymentUnitFilter<$PrismaModel>
    _max?: NestedEnumRepaymentUnitFilter<$PrismaModel>
  }

  export type EnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumInterestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestType | EnumInterestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterestTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterestTypeFilter<$PrismaModel>
    _max?: NestedEnumInterestTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    investorId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPlan?: SortOrder
    paymentFrequency?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    interestType?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPeriod?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    investorId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPlan?: SortOrder
    paymentFrequency?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    interestType?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    investorId?: SortOrder
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPlan?: SortOrder
    paymentFrequency?: SortOrder
    repaymentPeriod?: SortOrder
    repaymentUnit?: SortOrder
    interestType?: SortOrder
    createdAt?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    amount?: SortOrder
    interestRate?: SortOrder
    repaymentPeriod?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type InvestmentCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumProductPlanFieldUpdateOperationsInput = {
    set?: $Enums.ProductPlan | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocType | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type InvestmentUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput> | InvestmentCreateWithoutInvestorInput[] | InvestmentUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInvestorInput | InvestmentCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInvestorInput | InvestmentUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentCreateManyInvestorInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInvestorInput | InvestmentUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInvestorInput | InvestmentUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type CampaignCreatepitchLinksInput = {
    set: string[]
  }

  export type CampaignCreatemediaUrlsInput = {
    set: string[]
  }

  export type CampaignCreatepitchDeckFilesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentCreateNestedManyWithoutCampaignInput = {
    create?: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput> | InvestmentCreateWithoutCampaignInput[] | InvestmentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutCampaignInput | InvestmentCreateOrConnectWithoutCampaignInput[]
    createMany?: InvestmentCreateManyCampaignInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput> | InvestmentCreateWithoutCampaignInput[] | InvestmentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutCampaignInput | InvestmentCreateOrConnectWithoutCampaignInput[]
    createMany?: InvestmentCreateManyCampaignInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type EnumBusinessTypeFieldUpdateOperationsInput = {
    set?: $Enums.BusinessType
  }

  export type EnumBusinessAreaFieldUpdateOperationsInput = {
    set?: $Enums.BusinessArea
  }

  export type EnumBusinessSubareaFieldUpdateOperationsInput = {
    set?: $Enums.BusinessSubarea
  }

  export type EnumBusinessStageFieldUpdateOperationsInput = {
    set?: $Enums.BusinessStage
  }

  export type NullableEnumModelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModelType | null
  }

  export type CampaignUpdatepitchLinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CampaignUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CampaignUpdatepitchDeckFilesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRepaymentUnitFieldUpdateOperationsInput = {
    set?: $Enums.RepaymentUnit
  }

  export type EnumPaymentFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.PaymentFrequency
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInterestTypeFieldUpdateOperationsInput = {
    set?: $Enums.InterestType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type InvestmentUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput> | InvestmentCreateWithoutCampaignInput[] | InvestmentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutCampaignInput | InvestmentCreateOrConnectWithoutCampaignInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutCampaignInput | InvestmentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: InvestmentCreateManyCampaignInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutCampaignInput | InvestmentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutCampaignInput | InvestmentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput> | InvestmentCreateWithoutCampaignInput[] | InvestmentUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutCampaignInput | InvestmentCreateOrConnectWithoutCampaignInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutCampaignInput | InvestmentUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: InvestmentCreateManyCampaignInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutCampaignInput | InvestmentUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutCampaignInput | InvestmentUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<CampaignCreateWithoutInvestmentsInput, CampaignUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutInvestmentsInput
    connect?: CampaignWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CampaignUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<CampaignCreateWithoutInvestmentsInput, CampaignUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutInvestmentsInput
    upsert?: CampaignUpsertWithoutInvestmentsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutInvestmentsInput, CampaignUpdateWithoutInvestmentsInput>, CampaignUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestmentsInput
    upsert?: UserUpsertWithoutInvestmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestmentsInput, UserUpdateWithoutInvestmentsInput>, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProductPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductPlan | EnumProductPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductPlanNullableFilter<$PrismaModel> | $Enums.ProductPlan | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumDocTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableFilter<$PrismaModel> | $Enums.DocType | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProductPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductPlan | EnumProductPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ProductPlan[] | ListEnumProductPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumProductPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.ProductPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumProductPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumProductPlanNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDocTypeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBusinessTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeFilter<$PrismaModel> | $Enums.BusinessType
  }

  export type NestedEnumBusinessAreaFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessArea | EnumBusinessAreaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessAreaFilter<$PrismaModel> | $Enums.BusinessArea
  }

  export type NestedEnumBusinessSubareaFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessSubarea | EnumBusinessSubareaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessSubareaFilter<$PrismaModel> | $Enums.BusinessSubarea
  }

  export type NestedEnumBusinessStageFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStage | EnumBusinessStageFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStageFilter<$PrismaModel> | $Enums.BusinessStage
  }

  export type NestedEnumModelTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTypeNullableFilter<$PrismaModel> | $Enums.ModelType | null
  }

  export type NestedEnumRepaymentUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.RepaymentUnit | EnumRepaymentUnitFieldRefInput<$PrismaModel>
    in?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumRepaymentUnitFilter<$PrismaModel> | $Enums.RepaymentUnit
  }

  export type NestedEnumPaymentFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyFilter<$PrismaModel> | $Enums.PaymentFrequency
  }

  export type NestedEnumInterestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestType | EnumInterestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterestTypeFilter<$PrismaModel> | $Enums.InterestType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessType | EnumBusinessTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessType[] | ListEnumBusinessTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessTypeWithAggregatesFilter<$PrismaModel> | $Enums.BusinessType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessTypeFilter<$PrismaModel>
    _max?: NestedEnumBusinessTypeFilter<$PrismaModel>
  }

  export type NestedEnumBusinessAreaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessArea | EnumBusinessAreaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessArea[] | ListEnumBusinessAreaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessAreaWithAggregatesFilter<$PrismaModel> | $Enums.BusinessArea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessAreaFilter<$PrismaModel>
    _max?: NestedEnumBusinessAreaFilter<$PrismaModel>
  }

  export type NestedEnumBusinessSubareaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessSubarea | EnumBusinessSubareaFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessSubarea[] | ListEnumBusinessSubareaFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessSubareaWithAggregatesFilter<$PrismaModel> | $Enums.BusinessSubarea
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessSubareaFilter<$PrismaModel>
    _max?: NestedEnumBusinessSubareaFilter<$PrismaModel>
  }

  export type NestedEnumBusinessStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BusinessStage | EnumBusinessStageFieldRefInput<$PrismaModel>
    in?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.BusinessStage[] | ListEnumBusinessStageFieldRefInput<$PrismaModel>
    not?: NestedEnumBusinessStageWithAggregatesFilter<$PrismaModel> | $Enums.BusinessStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBusinessStageFilter<$PrismaModel>
    _max?: NestedEnumBusinessStageFilter<$PrismaModel>
  }

  export type NestedEnumModelTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelType | EnumModelTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ModelType[] | ListEnumModelTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumModelTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ModelType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumModelTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumModelTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRepaymentUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepaymentUnit | EnumRepaymentUnitFieldRefInput<$PrismaModel>
    in?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepaymentUnit[] | ListEnumRepaymentUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumRepaymentUnitWithAggregatesFilter<$PrismaModel> | $Enums.RepaymentUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepaymentUnitFilter<$PrismaModel>
    _max?: NestedEnumRepaymentUnitFilter<$PrismaModel>
  }

  export type NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentFrequency | EnumPaymentFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentFrequency[] | ListEnumPaymentFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.PaymentFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
    _max?: NestedEnumPaymentFrequencyFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumInterestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InterestType | EnumInterestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InterestType[] | ListEnumInterestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInterestTypeWithAggregatesFilter<$PrismaModel> | $Enums.InterestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInterestTypeFilter<$PrismaModel>
    _max?: NestedEnumInterestTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampaignStatus[] | ListEnumCampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CampaignCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentCreateWithoutInvestorInput = {
    id?: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutInvestorInput = {
    id?: string
    campaignId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentCreateManyInvestorInputEnvelope = {
    data: InvestmentCreateManyInvestorInput | InvestmentCreateManyInvestorInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    email?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    userId?: StringFilter<"Campaign"> | string
    businessType?: EnumBusinessTypeFilter<"Campaign"> | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFilter<"Campaign"> | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFilter<"Campaign"> | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFilter<"Campaign"> | $Enums.BusinessStage
    modelType?: EnumModelTypeNullableFilter<"Campaign"> | $Enums.ModelType | null
    capitalPlan?: StringNullableFilter<"Campaign"> | string | null
    pitchLinks?: StringNullableListFilter<"Campaign">
    mediaUrls?: StringNullableListFilter<"Campaign">
    pitchDeckFiles?: StringNullableListFilter<"Campaign">
    targetValue?: IntFilter<"Campaign"> | number
    repaymentPeriod?: IntFilter<"Campaign"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Campaign"> | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFilter<"Campaign"> | $Enums.PaymentFrequency
    gracePeriod?: IntNullableFilter<"Campaign"> | number | null
    interestType?: EnumInterestTypeFilter<"Campaign"> | $Enums.InterestType
    interestRate?: FloatNullableFilter<"Campaign"> | number | null
    euriborIndexed?: BoolNullableFilter<"Campaign"> | boolean | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
    create: XOR<InvestmentCreateWithoutInvestorInput, InvestmentUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInvestorInput, InvestmentUncheckedUpdateWithoutInvestorInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInvestorInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInvestorInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    campaignId?: StringFilter<"Investment"> | string
    investorId?: StringFilter<"Investment"> | string
    amount?: IntFilter<"Investment"> | number
    interestRate?: FloatFilter<"Investment"> | number
    repaymentPlan?: StringNullableFilter<"Investment"> | string | null
    paymentFrequency?: EnumPaymentFrequencyFilter<"Investment"> | $Enums.PaymentFrequency
    repaymentPeriod?: IntFilter<"Investment"> | number
    repaymentUnit?: EnumRepaymentUnitFilter<"Investment"> | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFilter<"Investment"> | $Enums.InterestType
    createdAt?: DateTimeFilter<"Investment"> | Date | string
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentCreateNestedManyWithoutInvestorInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    investments?: InvestmentUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type InvestmentCreateWithoutCampaignInput = {
    id?: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
    investor: UserCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentUncheckedCreateWithoutCampaignInput = {
    id?: string
    investorId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type InvestmentCreateOrConnectWithoutCampaignInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput>
  }

  export type InvestmentCreateManyCampaignInputEnvelope = {
    data: InvestmentCreateManyCampaignInput | InvestmentCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutInvestorNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type InvestmentUpsertWithWhereUniqueWithoutCampaignInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutCampaignInput, InvestmentUncheckedUpdateWithoutCampaignInput>
    create: XOR<InvestmentCreateWithoutCampaignInput, InvestmentUncheckedCreateWithoutCampaignInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutCampaignInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutCampaignInput, InvestmentUncheckedUpdateWithoutCampaignInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutCampaignInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    userId: string
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutInvestmentsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutInvestmentsInput, CampaignUncheckedCreateWithoutInvestmentsInput>
  }

  export type UserCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    email: string
    name?: string | null
    surnames?: string | null
    password: string
    productPlan?: $Enums.ProductPlan | null
    emailVerified?: boolean | null
    rememberToken?: string | null
    nif?: string | null
    identificationDocType?: $Enums.DocType | null
    identificationDocNumber?: string | null
    docExpiry?: Date | string | null
    address?: string | null
    postalCode?: string | null
    iban?: string | null
    paypalEmail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
  }

  export type CampaignUpsertWithoutInvestmentsInput = {
    update: XOR<CampaignUpdateWithoutInvestmentsInput, CampaignUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<CampaignCreateWithoutInvestmentsInput, CampaignUncheckedCreateWithoutInvestmentsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutInvestmentsInput, CampaignUncheckedUpdateWithoutInvestmentsInput>
  }

  export type CampaignUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutInvestmentsInput = {
    update: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<UserCreateWithoutInvestmentsInput, UserUncheckedCreateWithoutInvestmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestmentsInput, UserUncheckedUpdateWithoutInvestmentsInput>
  }

  export type UserUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surnames?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    productPlan?: NullableEnumProductPlanFieldUpdateOperationsInput | $Enums.ProductPlan | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: NullableStringFieldUpdateOperationsInput | string | null
    identificationDocType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    identificationDocNumber?: NullableStringFieldUpdateOperationsInput | string | null
    docExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    paypalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    name: string
    email: string
    description?: string | null
    businessType: $Enums.BusinessType
    businessArea: $Enums.BusinessArea
    businessSubarea: $Enums.BusinessSubarea
    stage: $Enums.BusinessStage
    modelType?: $Enums.ModelType | null
    capitalPlan?: string | null
    pitchLinks?: CampaignCreatepitchLinksInput | string[]
    mediaUrls?: CampaignCreatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignCreatepitchDeckFilesInput | string[]
    targetValue: number
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    paymentFrequency: $Enums.PaymentFrequency
    gracePeriod?: number | null
    interestType: $Enums.InterestType
    interestRate?: number | null
    euriborIndexed?: boolean | null
    status?: $Enums.CampaignStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestmentCreateManyInvestorInput = {
    id?: string
    campaignId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investments?: InvestmentUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: EnumBusinessTypeFieldUpdateOperationsInput | $Enums.BusinessType
    businessArea?: EnumBusinessAreaFieldUpdateOperationsInput | $Enums.BusinessArea
    businessSubarea?: EnumBusinessSubareaFieldUpdateOperationsInput | $Enums.BusinessSubarea
    stage?: EnumBusinessStageFieldUpdateOperationsInput | $Enums.BusinessStage
    modelType?: NullableEnumModelTypeFieldUpdateOperationsInput | $Enums.ModelType | null
    capitalPlan?: NullableStringFieldUpdateOperationsInput | string | null
    pitchLinks?: CampaignUpdatepitchLinksInput | string[]
    mediaUrls?: CampaignUpdatemediaUrlsInput | string[]
    pitchDeckFiles?: CampaignUpdatepitchDeckFilesInput | string[]
    targetValue?: IntFieldUpdateOperationsInput | number
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    gracePeriod?: NullableIntFieldUpdateOperationsInput | number | null
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    interestRate?: NullableFloatFieldUpdateOperationsInput | number | null
    euriborIndexed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyCampaignInput = {
    id?: string
    investorId: string
    amount: number
    interestRate: number
    repaymentPlan?: string | null
    paymentFrequency: $Enums.PaymentFrequency
    repaymentPeriod: number
    repaymentUnit: $Enums.RepaymentUnit
    interestType: $Enums.InterestType
    createdAt?: Date | string
  }

  export type InvestmentUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investor?: UserUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    investorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    repaymentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    paymentFrequency?: EnumPaymentFrequencyFieldUpdateOperationsInput | $Enums.PaymentFrequency
    repaymentPeriod?: IntFieldUpdateOperationsInput | number
    repaymentUnit?: EnumRepaymentUnitFieldUpdateOperationsInput | $Enums.RepaymentUnit
    interestType?: EnumInterestTypeFieldUpdateOperationsInput | $Enums.InterestType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}