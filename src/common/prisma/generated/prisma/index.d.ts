
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model ChatGroupMembers
 * 
 */
export type ChatGroupMembers = $Result.DefaultSelection<Prisma.$ChatGroupMembersPayload>
/**
 * Model ChatGroups
 * 
 */
export type ChatGroups = $Result.DefaultSelection<Prisma.$ChatGroupsPayload>
/**
 * Model ChatMessages
 * 
 */
export type ChatMessages = $Result.DefaultSelection<Prisma.$ChatMessagesPayload>
/**
 * Model Foods
 * 
 */
export type Foods = $Result.DefaultSelection<Prisma.$FoodsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroupMembers`: Exposes CRUD operations for the **ChatGroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroupMembers
    * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
    * ```
    */
  get chatGroupMembers(): Prisma.ChatGroupMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatGroups`: Exposes CRUD operations for the **ChatGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroups.findMany()
    * ```
    */
  get chatGroups(): Prisma.ChatGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessages`: Exposes CRUD operations for the **ChatMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessages.findMany()
    * ```
    */
  get chatMessages(): Prisma.ChatMessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **Foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.FoodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Articles: 'Articles',
    ChatGroupMembers: 'ChatGroupMembers',
    ChatGroups: 'ChatGroups',
    ChatMessages: 'ChatMessages',
    Foods: 'Foods',
    Orders: 'Orders',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "articles" | "chatGroupMembers" | "chatGroups" | "chatMessages" | "foods" | "orders" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      ChatGroupMembers: {
        payload: Prisma.$ChatGroupMembersPayload<ExtArgs>
        fields: Prisma.ChatGroupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          findMany: {
            args: Prisma.ChatGroupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>[]
          }
          create: {
            args: Prisma.ChatGroupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          createMany: {
            args: Prisma.ChatGroupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          update: {
            args: Prisma.ChatGroupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupMembersPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroupMembers>
          }
          groupBy: {
            args: Prisma.ChatGroupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupMembersCountAggregateOutputType> | number
          }
        }
      }
      ChatGroups: {
        payload: Prisma.$ChatGroupsPayload<ExtArgs>
        fields: Prisma.ChatGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          findMany: {
            args: Prisma.ChatGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>[]
          }
          create: {
            args: Prisma.ChatGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          createMany: {
            args: Prisma.ChatGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          update: {
            args: Prisma.ChatGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatGroupsPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatGroups>
          }
          groupBy: {
            args: Prisma.ChatGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupsCountAggregateOutputType> | number
          }
        }
      }
      ChatMessages: {
        payload: Prisma.$ChatMessagesPayload<ExtArgs>
        fields: Prisma.ChatMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findFirst: {
            args: Prisma.ChatMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findMany: {
            args: Prisma.ChatMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          create: {
            args: Prisma.ChatMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          createMany: {
            args: Prisma.ChatMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          update: {
            args: Prisma.ChatMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          deleteMany: {
            args: Prisma.ChatMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessages>
          }
          groupBy: {
            args: Prisma.ChatMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesCountAggregateOutputType> | number
          }
        }
      }
      Foods: {
        payload: Prisma.$FoodsPayload<ExtArgs>
        fields: Prisma.FoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findFirst: {
            args: Prisma.FoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findMany: {
            args: Prisma.FoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>[]
          }
          create: {
            args: Prisma.FoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          createMany: {
            args: Prisma.FoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          update: {
            args: Prisma.FoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          deleteMany: {
            args: Prisma.FoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.FoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    articles?: ArticlesOmit
    chatGroupMembers?: ChatGroupMembersOmit
    chatGroups?: ChatGroupsOmit
    chatMessages?: ChatMessagesOmit
    foods?: FoodsOmit
    orders?: OrdersOmit
    users?: UsersOmit
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
   * Count Type ChatGroupsCountOutputType
   */

  export type ChatGroupsCountOutputType = {
    ChatGroupMembers: number
    ChatMessages: number
  }

  export type ChatGroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | ChatGroupsCountOutputTypeCountChatGroupMembersArgs
    ChatMessages?: boolean | ChatGroupsCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupsCountOutputType
     */
    select?: ChatGroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
  }

  /**
   * ChatGroupsCountOutputType without action
   */
  export type ChatGroupsCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    Orders: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | FoodsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Articles: number
    ChatGroupMembers: number
    ChatGroups: number
    ChatMessages: number
    Orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | UsersCountOutputTypeCountArticlesArgs
    ChatGroupMembers?: boolean | UsersCountOutputTypeCountChatGroupMembersArgs
    ChatGroups?: boolean | UsersCountOutputTypeCountChatGroupsArgs
    ChatMessages?: boolean | UsersCountOutputTypeCountChatMessagesArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
    deletedBy: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    views: number
    userId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
    views?: true
    userId?: true
    deletedBy?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number
    userId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Articles$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>



  export type ArticlesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "views" | "userId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>
  export type ArticlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Articles$UsersArgs<ExtArgs>
  }

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      imageUrl: string | null
      views: number
      userId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
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
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Articles$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Articles$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'Int'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly content: FieldRef<"Articles", 'String'>
    readonly imageUrl: FieldRef<"Articles", 'String'>
    readonly views: FieldRef<"Articles", 'Int'>
    readonly userId: FieldRef<"Articles", 'Int'>
    readonly deletedBy: FieldRef<"Articles", 'Int'>
    readonly isDeleted: FieldRef<"Articles", 'Boolean'>
    readonly deletedAt: FieldRef<"Articles", 'DateTime'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly updatedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data?: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles.Users
   */
  export type Articles$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroupMembers
   */

  export type AggregateChatGroupMembers = {
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  export type ChatGroupMembersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
  }

  export type ChatGroupMembersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    chatGroupId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMembersCountAggregateOutputType = {
    id: number
    userId: number
    chatGroupId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupMembersAvgAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersSumAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
  }

  export type ChatGroupMembersMinAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersMaxAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMembersCountAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupMembers to aggregate.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroupMembers
    **/
    _count?: true | ChatGroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type GetChatGroupMembersAggregateType<T extends ChatGroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroupMembers[P]>
      : GetScalarType<T[P], AggregateChatGroupMembers[P]>
  }




  export type ChatGroupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithAggregationInput | ChatGroupMembersOrderByWithAggregationInput[]
    by: ChatGroupMembersScalarFieldEnum[] | ChatGroupMembersScalarFieldEnum
    having?: ChatGroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupMembersCountAggregateInputType | true
    _avg?: ChatGroupMembersAvgAggregateInputType
    _sum?: ChatGroupMembersSumAggregateInputType
    _min?: ChatGroupMembersMinAggregateInputType
    _max?: ChatGroupMembersMaxAggregateInputType
  }

  export type ChatGroupMembersGroupByOutputType = {
    id: number
    userId: number | null
    chatGroupId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupMembersCountAggregateOutputType | null
    _avg: ChatGroupMembersAvgAggregateOutputType | null
    _sum: ChatGroupMembersSumAggregateOutputType | null
    _min: ChatGroupMembersMinAggregateOutputType | null
    _max: ChatGroupMembersMaxAggregateOutputType | null
  }

  type GetChatGroupMembersGroupByPayload<T extends ChatGroupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | ChatGroupMembers$UsersArgs<ExtArgs>
    ChatGroups?: boolean | ChatGroupMembers$ChatGroupsArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupMembers"]>



  export type ChatGroupMembersSelectScalar = {
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chatGroupId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroupMembers"]>
  export type ChatGroupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | ChatGroupMembers$UsersArgs<ExtArgs>
    ChatGroups?: boolean | ChatGroupMembers$ChatGroupsArgs<ExtArgs>
  }

  export type $ChatGroupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroupMembers"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      chatGroupId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroupMembers"]>
    composites: {}
  }

  type ChatGroupMembersGetPayload<S extends boolean | null | undefined | ChatGroupMembersDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupMembersPayload, S>

  type ChatGroupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupMembersCountAggregateInputType | true
    }

  export interface ChatGroupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroupMembers'], meta: { name: 'ChatGroupMembers' } }
    /**
     * Find zero or one ChatGroupMembers that matches the filter.
     * @param {ChatGroupMembersFindUniqueArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupMembersFindUniqueArgs>(args: SelectSubset<T, ChatGroupMembersFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroupMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupMembersFindUniqueOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindFirstArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupMembersFindFirstArgs>(args?: SelectSubset<T, ChatGroupMembersFindFirstArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindFirstOrThrowArgs} args - Arguments to find a ChatGroupMembers
     * @example
     * // Get one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany()
     * 
     * // Get first 10 ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupMembersWithIdOnly = await prisma.chatGroupMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupMembersFindManyArgs>(args?: SelectSubset<T, ChatGroupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroupMembers.
     * @param {ChatGroupMembersCreateArgs} args - Arguments to create a ChatGroupMembers.
     * @example
     * // Create one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.create({
     *   data: {
     *     // ... data to create a ChatGroupMembers
     *   }
     * })
     * 
     */
    create<T extends ChatGroupMembersCreateArgs>(args: SelectSubset<T, ChatGroupMembersCreateArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroupMembers.
     * @param {ChatGroupMembersCreateManyArgs} args - Arguments to create many ChatGroupMembers.
     * @example
     * // Create many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupMembersCreateManyArgs>(args?: SelectSubset<T, ChatGroupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroupMembers.
     * @param {ChatGroupMembersDeleteArgs} args - Arguments to delete one ChatGroupMembers.
     * @example
     * // Delete one ChatGroupMembers
     * const ChatGroupMembers = await prisma.chatGroupMembers.delete({
     *   where: {
     *     // ... filter to delete one ChatGroupMembers
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupMembersDeleteArgs>(args: SelectSubset<T, ChatGroupMembersDeleteArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroupMembers.
     * @param {ChatGroupMembersUpdateArgs} args - Arguments to update one ChatGroupMembers.
     * @example
     * // Update one ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupMembersUpdateArgs>(args: SelectSubset<T, ChatGroupMembersUpdateArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroupMembers.
     * @param {ChatGroupMembersDeleteManyArgs} args - Arguments to filter ChatGroupMembers to delete.
     * @example
     * // Delete a few ChatGroupMembers
     * const { count } = await prisma.chatGroupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupMembersDeleteManyArgs>(args?: SelectSubset<T, ChatGroupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupMembersUpdateManyArgs>(args: SelectSubset<T, ChatGroupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroupMembers.
     * @param {ChatGroupMembersUpsertArgs} args - Arguments to update or create a ChatGroupMembers.
     * @example
     * // Update or create a ChatGroupMembers
     * const chatGroupMembers = await prisma.chatGroupMembers.upsert({
     *   create: {
     *     // ... data to create a ChatGroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupMembersUpsertArgs>(args: SelectSubset<T, ChatGroupMembersUpsertArgs<ExtArgs>>): Prisma__ChatGroupMembersClient<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersCountArgs} args - Arguments to filter ChatGroupMembers to count.
     * @example
     * // Count the number of ChatGroupMembers
     * const count = await prisma.chatGroupMembers.count({
     *   where: {
     *     // ... the filter for the ChatGroupMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupMembersCountArgs>(
      args?: Subset<T, ChatGroupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupMembersAggregateArgs>(args: Subset<T, ChatGroupMembersAggregateArgs>): Prisma.PrismaPromise<GetChatGroupMembersAggregateType<T>>

    /**
     * Group by ChatGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupMembersGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroupMembers model
   */
  readonly fields: ChatGroupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends ChatGroupMembers$UsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupMembers$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ChatGroups<T extends ChatGroupMembers$ChatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupMembers$ChatGroupsArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatGroupMembers model
   */
  interface ChatGroupMembersFieldRefs {
    readonly id: FieldRef<"ChatGroupMembers", 'Int'>
    readonly userId: FieldRef<"ChatGroupMembers", 'Int'>
    readonly chatGroupId: FieldRef<"ChatGroupMembers", 'Int'>
    readonly deletedBy: FieldRef<"ChatGroupMembers", 'Int'>
    readonly isDeleted: FieldRef<"ChatGroupMembers", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatGroupMembers", 'DateTime'>
    readonly createdAt: FieldRef<"ChatGroupMembers", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroupMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroupMembers findUnique
   */
  export type ChatGroupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers findUniqueOrThrow
   */
  export type ChatGroupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers findFirst
   */
  export type ChatGroupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers findFirstOrThrow
   */
  export type ChatGroupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers findMany
   */
  export type ChatGroupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupMembers to fetch.
     */
    where?: ChatGroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupMembers to fetch.
     */
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroupMembers.
     */
    cursor?: ChatGroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupMembers.
     */
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroupMembers create
   */
  export type ChatGroupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroupMembers.
     */
    data?: XOR<ChatGroupMembersCreateInput, ChatGroupMembersUncheckedCreateInput>
  }

  /**
   * ChatGroupMembers createMany
   */
  export type ChatGroupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroupMembers.
     */
    data: ChatGroupMembersCreateManyInput | ChatGroupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroupMembers update
   */
  export type ChatGroupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroupMembers.
     */
    data: XOR<ChatGroupMembersUpdateInput, ChatGroupMembersUncheckedUpdateInput>
    /**
     * Choose, which ChatGroupMembers to update.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers updateMany
   */
  export type ChatGroupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroupMembers.
     */
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroupMembers to update
     */
    where?: ChatGroupMembersWhereInput
    /**
     * Limit how many ChatGroupMembers to update.
     */
    limit?: number
  }

  /**
   * ChatGroupMembers upsert
   */
  export type ChatGroupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroupMembers to update in case it exists.
     */
    where: ChatGroupMembersWhereUniqueInput
    /**
     * In case the ChatGroupMembers found by the `where` argument doesn't exist, create a new ChatGroupMembers with this data.
     */
    create: XOR<ChatGroupMembersCreateInput, ChatGroupMembersUncheckedCreateInput>
    /**
     * In case the ChatGroupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupMembersUpdateInput, ChatGroupMembersUncheckedUpdateInput>
  }

  /**
   * ChatGroupMembers delete
   */
  export type ChatGroupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    /**
     * Filter which ChatGroupMembers to delete.
     */
    where: ChatGroupMembersWhereUniqueInput
  }

  /**
   * ChatGroupMembers deleteMany
   */
  export type ChatGroupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupMembers to delete
     */
    where?: ChatGroupMembersWhereInput
    /**
     * Limit how many ChatGroupMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatGroupMembers.Users
   */
  export type ChatGroupMembers$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * ChatGroupMembers.ChatGroups
   */
  export type ChatGroupMembers$ChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    where?: ChatGroupsWhereInput
  }

  /**
   * ChatGroupMembers without action
   */
  export type ChatGroupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
  }


  /**
   * Model ChatGroups
   */

  export type AggregateChatGroups = {
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  export type ChatGroupsAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    deletedBy: number | null
  }

  export type ChatGroupsMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupsCountAggregateOutputType = {
    id: number
    name: number
    ownerId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupsAvgAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsSumAggregateInputType = {
    id?: true
    ownerId?: true
    deletedBy?: true
  }

  export type ChatGroupsMinAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsMaxAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupsCountAggregateInputType = {
    id?: true
    name?: true
    ownerId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to aggregate.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type GetChatGroupsAggregateType<T extends ChatGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroups[P]>
      : GetScalarType<T[P], AggregateChatGroups[P]>
  }




  export type ChatGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupsWhereInput
    orderBy?: ChatGroupsOrderByWithAggregationInput | ChatGroupsOrderByWithAggregationInput[]
    by: ChatGroupsScalarFieldEnum[] | ChatGroupsScalarFieldEnum
    having?: ChatGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupsCountAggregateInputType | true
    _avg?: ChatGroupsAvgAggregateInputType
    _sum?: ChatGroupsSumAggregateInputType
    _min?: ChatGroupsMinAggregateInputType
    _max?: ChatGroupsMaxAggregateInputType
  }

  export type ChatGroupsGroupByOutputType = {
    id: number
    name: string | null
    ownerId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupsCountAggregateOutputType | null
    _avg: ChatGroupsAvgAggregateOutputType | null
    _sum: ChatGroupsSumAggregateOutputType | null
    _min: ChatGroupsMinAggregateOutputType | null
    _max: ChatGroupsMaxAggregateOutputType | null
  }

  type GetChatGroupsGroupByPayload<T extends ChatGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupsGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroupMembers?: boolean | ChatGroups$ChatGroupMembersArgs<ExtArgs>
    Users?: boolean | ChatGroups$UsersArgs<ExtArgs>
    ChatMessages?: boolean | ChatGroups$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroups"]>



  export type ChatGroupsSelectScalar = {
    id?: boolean
    name?: boolean
    ownerId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatGroups"]>
  export type ChatGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroupMembers?: boolean | ChatGroups$ChatGroupMembersArgs<ExtArgs>
    Users?: boolean | ChatGroups$UsersArgs<ExtArgs>
    ChatMessages?: boolean | ChatGroups$ChatMessagesArgs<ExtArgs>
    _count?: boolean | ChatGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroups"
    objects: {
      ChatGroupMembers: Prisma.$ChatGroupMembersPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs> | null
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      ownerId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroups"]>
    composites: {}
  }

  type ChatGroupsGetPayload<S extends boolean | null | undefined | ChatGroupsDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupsPayload, S>

  type ChatGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatGroupsCountAggregateInputType | true
    }

  export interface ChatGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroups'], meta: { name: 'ChatGroups' } }
    /**
     * Find zero or one ChatGroups that matches the filter.
     * @param {ChatGroupsFindUniqueArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatGroupsFindUniqueArgs>(args: SelectSubset<T, ChatGroupsFindUniqueArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatGroupsFindUniqueOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindFirstArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatGroupsFindFirstArgs>(args?: SelectSubset<T, ChatGroupsFindFirstArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindFirstOrThrowArgs} args - Arguments to find a ChatGroups
     * @example
     * // Get one ChatGroups
     * const chatGroups = await prisma.chatGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupsWithIdOnly = await prisma.chatGroups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatGroupsFindManyArgs>(args?: SelectSubset<T, ChatGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatGroups.
     * @param {ChatGroupsCreateArgs} args - Arguments to create a ChatGroups.
     * @example
     * // Create one ChatGroups
     * const ChatGroups = await prisma.chatGroups.create({
     *   data: {
     *     // ... data to create a ChatGroups
     *   }
     * })
     * 
     */
    create<T extends ChatGroupsCreateArgs>(args: SelectSubset<T, ChatGroupsCreateArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatGroups.
     * @param {ChatGroupsCreateManyArgs} args - Arguments to create many ChatGroups.
     * @example
     * // Create many ChatGroups
     * const chatGroups = await prisma.chatGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatGroupsCreateManyArgs>(args?: SelectSubset<T, ChatGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroups.
     * @param {ChatGroupsDeleteArgs} args - Arguments to delete one ChatGroups.
     * @example
     * // Delete one ChatGroups
     * const ChatGroups = await prisma.chatGroups.delete({
     *   where: {
     *     // ... filter to delete one ChatGroups
     *   }
     * })
     * 
     */
    delete<T extends ChatGroupsDeleteArgs>(args: SelectSubset<T, ChatGroupsDeleteArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatGroups.
     * @param {ChatGroupsUpdateArgs} args - Arguments to update one ChatGroups.
     * @example
     * // Update one ChatGroups
     * const chatGroups = await prisma.chatGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatGroupsUpdateArgs>(args: SelectSubset<T, ChatGroupsUpdateArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupsDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatGroupsDeleteManyArgs>(args?: SelectSubset<T, ChatGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroups = await prisma.chatGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatGroupsUpdateManyArgs>(args: SelectSubset<T, ChatGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroups.
     * @param {ChatGroupsUpsertArgs} args - Arguments to update or create a ChatGroups.
     * @example
     * // Update or create a ChatGroups
     * const chatGroups = await prisma.chatGroups.upsert({
     *   create: {
     *     // ... data to create a ChatGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroups we want to update
     *   }
     * })
     */
    upsert<T extends ChatGroupsUpsertArgs>(args: SelectSubset<T, ChatGroupsUpsertArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroups.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupsCountArgs>(
      args?: Subset<T, ChatGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupsAggregateArgs>(args: Subset<T, ChatGroupsAggregateArgs>): Prisma.PrismaPromise<GetChatGroupsAggregateType<T>>

    /**
     * Group by ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupsGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupsGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroups model
   */
  readonly fields: ChatGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroupMembers<T extends ChatGroups$ChatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$ChatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Users<T extends ChatGroups$UsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ChatMessages<T extends ChatGroups$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroups$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatGroups model
   */
  interface ChatGroupsFieldRefs {
    readonly id: FieldRef<"ChatGroups", 'Int'>
    readonly name: FieldRef<"ChatGroups", 'String'>
    readonly ownerId: FieldRef<"ChatGroups", 'Int'>
    readonly deletedBy: FieldRef<"ChatGroups", 'Int'>
    readonly isDeleted: FieldRef<"ChatGroups", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatGroups", 'DateTime'>
    readonly createdAt: FieldRef<"ChatGroups", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatGroups findUnique
   */
  export type ChatGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups findUniqueOrThrow
   */
  export type ChatGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups findFirst
   */
  export type ChatGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups findFirstOrThrow
   */
  export type ChatGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups findMany
   */
  export type ChatGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * ChatGroups create
   */
  export type ChatGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroups.
     */
    data?: XOR<ChatGroupsCreateInput, ChatGroupsUncheckedCreateInput>
  }

  /**
   * ChatGroups createMany
   */
  export type ChatGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupsCreateManyInput | ChatGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatGroups update
   */
  export type ChatGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroups.
     */
    data: XOR<ChatGroupsUpdateInput, ChatGroupsUncheckedUpdateInput>
    /**
     * Choose, which ChatGroups to update.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups updateMany
   */
  export type ChatGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupsUpdateManyMutationInput, ChatGroupsUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupsWhereInput
    /**
     * Limit how many ChatGroups to update.
     */
    limit?: number
  }

  /**
   * ChatGroups upsert
   */
  export type ChatGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroups to update in case it exists.
     */
    where: ChatGroupsWhereUniqueInput
    /**
     * In case the ChatGroups found by the `where` argument doesn't exist, create a new ChatGroups with this data.
     */
    create: XOR<ChatGroupsCreateInput, ChatGroupsUncheckedCreateInput>
    /**
     * In case the ChatGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupsUpdateInput, ChatGroupsUncheckedUpdateInput>
  }

  /**
   * ChatGroups delete
   */
  export type ChatGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    /**
     * Filter which ChatGroups to delete.
     */
    where: ChatGroupsWhereUniqueInput
  }

  /**
   * ChatGroups deleteMany
   */
  export type ChatGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupsWhereInput
    /**
     * Limit how many ChatGroups to delete.
     */
    limit?: number
  }

  /**
   * ChatGroups.ChatGroupMembers
   */
  export type ChatGroups$ChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    cursor?: ChatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * ChatGroups.Users
   */
  export type ChatGroups$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * ChatGroups.ChatMessages
   */
  export type ChatGroups$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatGroups without action
   */
  export type ChatGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessages
   */

  export type AggregateChatMessages = {
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  export type ChatMessagesAvgAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesSumAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    deletedBy: number | null
  }

  export type ChatMessagesMinAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesMaxAggregateOutputType = {
    id: number | null
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesCountAggregateOutputType = {
    id: number
    chatGroupId: number
    userIdSender: number
    messageText: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessagesAvgAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesSumAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    deletedBy?: true
  }

  export type ChatMessagesMinAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesMaxAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesCountAggregateInputType = {
    id?: true
    chatGroupId?: true
    userIdSender?: true
    messageText?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to aggregate.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type GetChatMessagesAggregateType<T extends ChatMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessages[P]>
      : GetScalarType<T[P], AggregateChatMessages[P]>
  }




  export type ChatMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithAggregationInput | ChatMessagesOrderByWithAggregationInput[]
    by: ChatMessagesScalarFieldEnum[] | ChatMessagesScalarFieldEnum
    having?: ChatMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessagesCountAggregateInputType | true
    _avg?: ChatMessagesAvgAggregateInputType
    _sum?: ChatMessagesSumAggregateInputType
    _min?: ChatMessagesMinAggregateInputType
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type ChatMessagesGroupByOutputType = {
    id: number
    chatGroupId: number | null
    userIdSender: number | null
    messageText: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  type GetChatMessagesGroupByPayload<T extends ChatMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ChatGroups?: boolean | ChatMessages$ChatGroupsArgs<ExtArgs>
    Users?: boolean | ChatMessages$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>



  export type ChatMessagesSelectScalar = {
    id?: boolean
    chatGroupId?: boolean
    userIdSender?: boolean
    messageText?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatGroupId" | "userIdSender" | "messageText" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessages"]>
  export type ChatMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatGroups?: boolean | ChatMessages$ChatGroupsArgs<ExtArgs>
    Users?: boolean | ChatMessages$UsersArgs<ExtArgs>
  }

  export type $ChatMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessages"
    objects: {
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatGroupId: number | null
      userIdSender: number | null
      messageText: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessages"]>
    composites: {}
  }

  type ChatMessagesGetPayload<S extends boolean | null | undefined | ChatMessagesDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagesPayload, S>

  type ChatMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessagesCountAggregateInputType | true
    }

  export interface ChatMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessages'], meta: { name: 'ChatMessages' } }
    /**
     * Find zero or one ChatMessages that matches the filter.
     * @param {ChatMessagesFindUniqueArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessagesFindUniqueArgs>(args: SelectSubset<T, ChatMessagesFindUniqueArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessagesFindUniqueOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessagesFindFirstArgs>(args?: SelectSubset<T, ChatMessagesFindFirstArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessagesFindManyArgs>(args?: SelectSubset<T, ChatMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessages.
     * @param {ChatMessagesCreateArgs} args - Arguments to create a ChatMessages.
     * @example
     * // Create one ChatMessages
     * const ChatMessages = await prisma.chatMessages.create({
     *   data: {
     *     // ... data to create a ChatMessages
     *   }
     * })
     * 
     */
    create<T extends ChatMessagesCreateArgs>(args: SelectSubset<T, ChatMessagesCreateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessagesCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessagesCreateManyArgs>(args?: SelectSubset<T, ChatMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessages.
     * @param {ChatMessagesDeleteArgs} args - Arguments to delete one ChatMessages.
     * @example
     * // Delete one ChatMessages
     * const ChatMessages = await prisma.chatMessages.delete({
     *   where: {
     *     // ... filter to delete one ChatMessages
     *   }
     * })
     * 
     */
    delete<T extends ChatMessagesDeleteArgs>(args: SelectSubset<T, ChatMessagesDeleteArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessages.
     * @param {ChatMessagesUpdateArgs} args - Arguments to update one ChatMessages.
     * @example
     * // Update one ChatMessages
     * const chatMessages = await prisma.chatMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessagesUpdateArgs>(args: SelectSubset<T, ChatMessagesUpdateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessagesDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessagesDeleteManyArgs>(args?: SelectSubset<T, ChatMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessagesUpdateManyArgs>(args: SelectSubset<T, ChatMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessages.
     * @param {ChatMessagesUpsertArgs} args - Arguments to update or create a ChatMessages.
     * @example
     * // Update or create a ChatMessages
     * const chatMessages = await prisma.chatMessages.upsert({
     *   create: {
     *     // ... data to create a ChatMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessages we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessagesUpsertArgs>(args: SelectSubset<T, ChatMessagesUpsertArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessages.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessagesCountArgs>(
      args?: Subset<T, ChatMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessagesAggregateArgs>(args: Subset<T, ChatMessagesAggregateArgs>): Prisma.PrismaPromise<GetChatMessagesAggregateType<T>>

    /**
     * Group by ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesGroupByArgs} args - Group by arguments.
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
      T extends ChatMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessagesGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessages model
   */
  readonly fields: ChatMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatGroups<T extends ChatMessages$ChatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessages$ChatGroupsArgs<ExtArgs>>): Prisma__ChatGroupsClient<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends ChatMessages$UsersArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessages$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessages model
   */
  interface ChatMessagesFieldRefs {
    readonly id: FieldRef<"ChatMessages", 'Int'>
    readonly chatGroupId: FieldRef<"ChatMessages", 'Int'>
    readonly userIdSender: FieldRef<"ChatMessages", 'Int'>
    readonly messageText: FieldRef<"ChatMessages", 'String'>
    readonly deletedBy: FieldRef<"ChatMessages", 'Int'>
    readonly isDeleted: FieldRef<"ChatMessages", 'Boolean'>
    readonly deletedAt: FieldRef<"ChatMessages", 'DateTime'>
    readonly createdAt: FieldRef<"ChatMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessages findUnique
   */
  export type ChatMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findUniqueOrThrow
   */
  export type ChatMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findFirst
   */
  export type ChatMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findFirstOrThrow
   */
  export type ChatMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findMany
   */
  export type ChatMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages create
   */
  export type ChatMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessages.
     */
    data?: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
  }

  /**
   * ChatMessages createMany
   */
  export type ChatMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessagesCreateManyInput | ChatMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessages update
   */
  export type ChatMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessages.
     */
    data: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
    /**
     * Choose, which ChatMessages to update.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages updateMany
   */
  export type ChatMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessages upsert
   */
  export type ChatMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessages to update in case it exists.
     */
    where: ChatMessagesWhereUniqueInput
    /**
     * In case the ChatMessages found by the `where` argument doesn't exist, create a new ChatMessages with this data.
     */
    create: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
    /**
     * In case the ChatMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
  }

  /**
   * ChatMessages delete
   */
  export type ChatMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter which ChatMessages to delete.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages deleteMany
   */
  export type ChatMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessages.ChatGroups
   */
  export type ChatMessages$ChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    where?: ChatGroupsWhereInput
  }

  /**
   * ChatMessages.Users
   */
  export type ChatMessages$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * ChatMessages without action
   */
  export type ChatMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
  }


  /**
   * Model Foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type FoodsSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type FoodsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type FoodsSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type FoodsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to aggregate.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type FoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithAggregationInput | FoodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: FoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    id: number
    name: string | null
    description: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends FoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type FoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>



  export type FoodsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["foods"]>
  export type FoodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foods"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      description: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type FoodsGetPayload<S extends boolean | null | undefined | FoodsDefaultArgs> = $Result.GetResult<Prisma.$FoodsPayload, S>

  type FoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface FoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foods'], meta: { name: 'Foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {FoodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodsFindUniqueArgs>(args: SelectSubset<T, FoodsFindUniqueArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodsFindFirstArgs>(args?: SelectSubset<T, FoodsFindFirstArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodsWithIdOnly = await prisma.foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodsFindManyArgs>(args?: SelectSubset<T, FoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foods.
     * @param {FoodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends FoodsCreateArgs>(args: SelectSubset<T, FoodsCreateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodsCreateManyArgs>(args?: SelectSubset<T, FoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {FoodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends FoodsDeleteArgs>(args: SelectSubset<T, FoodsDeleteArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foods.
     * @param {FoodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodsUpdateArgs>(args: SelectSubset<T, FoodsUpdateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodsDeleteManyArgs>(args?: SelectSubset<T, FoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodsUpdateManyArgs>(args: SelectSubset<T, FoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {FoodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends FoodsUpsertArgs>(args: SelectSubset<T, FoodsUpsertArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodsCountArgs>(
      args?: Subset<T, FoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsGroupByArgs} args - Group by arguments.
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
      T extends FoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodsGroupByArgs['orderBy'] }
        : { orderBy?: FoodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foods model
   */
  readonly fields: FoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends Foods$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Foods$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Foods model
   */
  interface FoodsFieldRefs {
    readonly id: FieldRef<"Foods", 'Int'>
    readonly name: FieldRef<"Foods", 'String'>
    readonly description: FieldRef<"Foods", 'String'>
    readonly deletedBy: FieldRef<"Foods", 'Int'>
    readonly isDeleted: FieldRef<"Foods", 'Boolean'>
    readonly deletedAt: FieldRef<"Foods", 'DateTime'>
    readonly createdAt: FieldRef<"Foods", 'DateTime'>
    readonly updatedAt: FieldRef<"Foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Foods findUnique
   */
  export type FoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findUniqueOrThrow
   */
  export type FoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findFirst
   */
  export type FoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findFirstOrThrow
   */
  export type FoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findMany
   */
  export type FoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods create
   */
  export type FoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to create a Foods.
     */
    data?: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
  }

  /**
   * Foods createMany
   */
  export type FoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodsCreateManyInput | FoodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foods update
   */
  export type FoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to update a Foods.
     */
    data: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
    /**
     * Choose, which Foods to update.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods updateMany
   */
  export type FoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Foods upsert
   */
  export type FoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The filter to search for the Foods to update in case it exists.
     */
    where: FoodsWhereUniqueInput
    /**
     * In case the Foods found by the `where` argument doesn't exist, create a new Foods with this data.
     */
    create: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
    /**
     * In case the Foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
  }

  /**
   * Foods delete
   */
  export type FoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter which Foods to delete.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods deleteMany
   */
  export type FoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Foods.Orders
   */
  export type Foods$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Foods without action
   */
  export type FoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: number | null
    foodId: number | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Foods: Prisma.$FoodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      foodId: number | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Orders$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Foods<T extends Orders$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$FoodsArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly userId: FieldRef<"Orders", 'Int'>
    readonly foodId: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data?: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Users
   */
  export type Orders$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orders.Foods
   */
  export type Orders$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    password: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    codeChangePass: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    password: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    codeChangePass: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    avatar: number
    age: number
    totpSecret: number
    googleId: number
    password: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    codeChangePass: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    codeChangePass?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    codeChangePass?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    password?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    codeChangePass?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    fullName: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    password: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    codeChangePass: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    password?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codeChangePass?: boolean
    Articles?: boolean | Users$ArticlesArgs<ExtArgs>
    ChatGroupMembers?: boolean | Users$ChatGroupMembersArgs<ExtArgs>
    ChatGroups?: boolean | Users$ChatGroupsArgs<ExtArgs>
    ChatMessages?: boolean | Users$ChatMessagesArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    password?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codeChangePass?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "avatar" | "age" | "totpSecret" | "googleId" | "password" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt" | "codeChangePass", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | Users$ArticlesArgs<ExtArgs>
    ChatGroupMembers?: boolean | Users$ChatGroupMembersArgs<ExtArgs>
    ChatGroups?: boolean | Users$ChatGroupsArgs<ExtArgs>
    ChatMessages?: boolean | Users$ChatMessagesArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Articles: Prisma.$ArticlesPayload<ExtArgs>[]
      ChatGroupMembers: Prisma.$ChatGroupMembersPayload<ExtArgs>[]
      ChatGroups: Prisma.$ChatGroupsPayload<ExtArgs>[]
      ChatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string | null
      avatar: string | null
      age: number | null
      totpSecret: string | null
      googleId: string | null
      password: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      codeChangePass: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Articles<T extends Users$ArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatGroupMembers<T extends Users$ChatGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatGroups<T extends Users$ChatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChatMessages<T extends Users$ChatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ChatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
    readonly totpSecret: FieldRef<"Users", 'String'>
    readonly googleId: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly deletedBy: FieldRef<"Users", 'Int'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly codeChangePass: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Articles
   */
  export type Users$ArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    cursor?: ArticlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Users.ChatGroupMembers
   */
  export type Users$ChatGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupMembers
     */
    select?: ChatGroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroupMembers
     */
    omit?: ChatGroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupMembersInclude<ExtArgs> | null
    where?: ChatGroupMembersWhereInput
    orderBy?: ChatGroupMembersOrderByWithRelationInput | ChatGroupMembersOrderByWithRelationInput[]
    cursor?: ChatGroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupMembersScalarFieldEnum | ChatGroupMembersScalarFieldEnum[]
  }

  /**
   * Users.ChatGroups
   */
  export type Users$ChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroups
     */
    select?: ChatGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatGroups
     */
    omit?: ChatGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatGroupsInclude<ExtArgs> | null
    where?: ChatGroupsWhereInput
    orderBy?: ChatGroupsOrderByWithRelationInput | ChatGroupsOrderByWithRelationInput[]
    cursor?: ChatGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupsScalarFieldEnum | ChatGroupsScalarFieldEnum[]
  }

  /**
   * Users.ChatMessages
   */
  export type Users$ChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
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


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    views: 'views',
    userId: 'userId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const ChatGroupMembersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatGroupId: 'chatGroupId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupMembersScalarFieldEnum = (typeof ChatGroupMembersScalarFieldEnum)[keyof typeof ChatGroupMembersScalarFieldEnum]


  export const ChatGroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerId: 'ownerId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupsScalarFieldEnum = (typeof ChatGroupsScalarFieldEnum)[keyof typeof ChatGroupsScalarFieldEnum]


  export const ChatMessagesScalarFieldEnum: {
    id: 'id',
    chatGroupId: 'chatGroupId',
    userIdSender: 'userIdSender',
    messageText: 'messageText',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessagesScalarFieldEnum = (typeof ChatMessagesScalarFieldEnum)[keyof typeof ChatMessagesScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodId: 'foodId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    age: 'age',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    password: 'password',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    codeChangePass: 'codeChangePass'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ArticlesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl'
  };

  export type ArticlesOrderByRelevanceFieldEnum = (typeof ArticlesOrderByRelevanceFieldEnum)[keyof typeof ArticlesOrderByRelevanceFieldEnum]


  export const ChatGroupsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ChatGroupsOrderByRelevanceFieldEnum = (typeof ChatGroupsOrderByRelevanceFieldEnum)[keyof typeof ChatGroupsOrderByRelevanceFieldEnum]


  export const ChatMessagesOrderByRelevanceFieldEnum: {
    messageText: 'messageText'
  };

  export type ChatMessagesOrderByRelevanceFieldEnum = (typeof ChatMessagesOrderByRelevanceFieldEnum)[keyof typeof ChatMessagesOrderByRelevanceFieldEnum]


  export const FoodsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type FoodsOrderByRelevanceFieldEnum = (typeof FoodsOrderByRelevanceFieldEnum)[keyof typeof FoodsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    fullName: 'fullName',
    avatar: 'avatar',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    password: 'password',
    codeChangePass: 'codeChangePass'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: IntFilter<"Articles"> | number
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntNullableFilter<"Articles"> | number | null
    deletedBy?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: ArticlesOrderByRelevanceInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntNullableFilter<"Articles"> | number | null
    deletedBy?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _avg?: ArticlesAvgOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
    _sum?: ArticlesSumOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Articles"> | number
    title?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    content?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    views?: IntWithAggregatesFilter<"Articles"> | number
    userId?: IntNullableWithAggregatesFilter<"Articles"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Articles"> | number
    isDeleted?: BoolWithAggregatesFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
  }

  export type ChatGroupMembersWhereInput = {
    AND?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    OR?: ChatGroupMembersWhereInput[]
    NOT?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    id?: IntFilter<"ChatGroupMembers"> | number
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
  }

  export type ChatGroupMembersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    ChatGroups?: ChatGroupsOrderByWithRelationInput
  }

  export type ChatGroupMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    OR?: ChatGroupMembersWhereInput[]
    NOT?: ChatGroupMembersWhereInput | ChatGroupMembersWhereInput[]
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
  }, "id">

  export type ChatGroupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupMembersCountOrderByAggregateInput
    _avg?: ChatGroupMembersAvgOrderByAggregateInput
    _max?: ChatGroupMembersMaxOrderByAggregateInput
    _min?: ChatGroupMembersMinOrderByAggregateInput
    _sum?: ChatGroupMembersSumOrderByAggregateInput
  }

  export type ChatGroupMembersScalarWhereWithAggregatesInput = {
    AND?: ChatGroupMembersScalarWhereWithAggregatesInput | ChatGroupMembersScalarWhereWithAggregatesInput[]
    OR?: ChatGroupMembersScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupMembersScalarWhereWithAggregatesInput | ChatGroupMembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroupMembers"> | number
    userId?: IntNullableWithAggregatesFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableWithAggregatesFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntWithAggregatesFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroupMembers"> | Date | string
  }

  export type ChatGroupsWhereInput = {
    AND?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    OR?: ChatGroupsWhereInput[]
    NOT?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    id?: IntFilter<"ChatGroups"> | number
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatMessages?: ChatMessagesListRelationFilter
  }

  export type ChatGroupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroupMembers?: ChatGroupMembersOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    _relevance?: ChatGroupsOrderByRelevanceInput
  }

  export type ChatGroupsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    OR?: ChatGroupsWhereInput[]
    NOT?: ChatGroupsWhereInput | ChatGroupsWhereInput[]
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    ChatMessages?: ChatMessagesListRelationFilter
  }, "id">

  export type ChatGroupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupsCountOrderByAggregateInput
    _avg?: ChatGroupsAvgOrderByAggregateInput
    _max?: ChatGroupsMaxOrderByAggregateInput
    _min?: ChatGroupsMinOrderByAggregateInput
    _sum?: ChatGroupsSumOrderByAggregateInput
  }

  export type ChatGroupsScalarWhereWithAggregatesInput = {
    AND?: ChatGroupsScalarWhereWithAggregatesInput | ChatGroupsScalarWhereWithAggregatesInput[]
    OR?: ChatGroupsScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupsScalarWhereWithAggregatesInput | ChatGroupsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGroups"> | number
    name?: StringNullableWithAggregatesFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableWithAggregatesFilter<"ChatGroups"> | number | null
    deletedBy?: IntWithAggregatesFilter<"ChatGroups"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroups"> | Date | string
  }

  export type ChatMessagesWhereInput = {
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatGroupId?: IntNullableFilter<"ChatMessages"> | number | null
    userIdSender?: IntNullableFilter<"ChatMessages"> | number | null
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type ChatMessagesOrderByWithRelationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ChatGroups?: ChatGroupsOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
    _relevance?: ChatMessagesOrderByRelevanceInput
  }

  export type ChatMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    chatGroupId?: IntNullableFilter<"ChatMessages"> | number | null
    userIdSender?: IntNullableFilter<"ChatMessages"> | number | null
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    ChatGroups?: XOR<ChatGroupsNullableScalarRelationFilter, ChatGroupsWhereInput> | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type ChatMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    chatGroupId?: SortOrderInput | SortOrder
    userIdSender?: SortOrderInput | SortOrder
    messageText?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessagesCountOrderByAggregateInput
    _avg?: ChatMessagesAvgOrderByAggregateInput
    _max?: ChatMessagesMaxOrderByAggregateInput
    _min?: ChatMessagesMinOrderByAggregateInput
    _sum?: ChatMessagesSumOrderByAggregateInput
  }

  export type ChatMessagesScalarWhereWithAggregatesInput = {
    AND?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    OR?: ChatMessagesScalarWhereWithAggregatesInput[]
    NOT?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessages"> | number
    chatGroupId?: IntNullableWithAggregatesFilter<"ChatMessages"> | number | null
    userIdSender?: IntNullableWithAggregatesFilter<"ChatMessages"> | number | null
    messageText?: StringNullableWithAggregatesFilter<"ChatMessages"> | string | null
    deletedBy?: IntWithAggregatesFilter<"ChatMessages"> | number
    isDeleted?: BoolWithAggregatesFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
  }

  export type FoodsWhereInput = {
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    id?: IntFilter<"Foods"> | number
    name?: StringNullableFilter<"Foods"> | string | null
    description?: StringNullableFilter<"Foods"> | string | null
    deletedBy?: IntFilter<"Foods"> | number
    isDeleted?: BoolFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    Orders?: OrdersListRelationFilter
  }

  export type FoodsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Orders?: OrdersOrderByRelationAggregateInput
    _relevance?: FoodsOrderByRelevanceInput
  }

  export type FoodsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    name?: StringNullableFilter<"Foods"> | string | null
    description?: StringNullableFilter<"Foods"> | string | null
    deletedBy?: IntFilter<"Foods"> | number
    isDeleted?: BoolFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    Orders?: OrdersListRelationFilter
  }, "id">

  export type FoodsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodsCountOrderByAggregateInput
    _avg?: FoodsAvgOrderByAggregateInput
    _max?: FoodsMaxOrderByAggregateInput
    _min?: FoodsMinOrderByAggregateInput
    _sum?: FoodsSumOrderByAggregateInput
  }

  export type FoodsScalarWhereWithAggregatesInput = {
    AND?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    OR?: FoodsScalarWhereWithAggregatesInput[]
    NOT?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foods"> | number
    name?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    description?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Foods"> | number
    isDeleted?: BoolWithAggregatesFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Foods?: FoodsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    userId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    foodId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    totpSecret?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    codeChangePass?: StringNullableFilter<"Users"> | string | null
    Articles?: ArticlesListRelationFilter
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    ChatGroups?: ChatGroupsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Orders?: OrdersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeChangePass?: SortOrderInput | SortOrder
    Articles?: ArticlesOrderByRelationAggregateInput
    ChatGroupMembers?: ChatGroupMembersOrderByRelationAggregateInput
    ChatGroups?: ChatGroupsOrderByRelationAggregateInput
    ChatMessages?: ChatMessagesOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    totpSecret?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    codeChangePass?: StringNullableFilter<"Users"> | string | null
    Articles?: ArticlesListRelationFilter
    ChatGroupMembers?: ChatGroupMembersListRelationFilter
    ChatGroups?: ChatGroupsListRelationFilter
    ChatMessages?: ChatMessagesListRelationFilter
    Orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeChangePass?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    age?: IntNullableWithAggregatesFilter<"Users"> | number | null
    totpSecret?: StringNullableWithAggregatesFilter<"Users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Users"> | number
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    codeChangePass?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ArticlesCreateInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupMembersInput
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupMembersNestedInput
    ChatGroups?: ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersCreateManyInput = {
    id?: number
    userId?: number | null
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsCreateInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsCreateManyInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatMessagesInput
    Users?: UsersCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateInput = {
    id?: number
    chatGroupId?: number | null
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneWithoutChatMessagesNestedInput
    Users?: UsersUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyInput = {
    id?: number
    chatGroupId?: number | null
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateManyMutationInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsCreateInput = {
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsCreateManyInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    Users?: UsersCreateNestedOneWithoutOrdersInput
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
  }

  export type OrdersUpdateInput = {
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersCreateManyInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
  }

  export type OrdersUpdateManyMutationInput = {

  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersCreateInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticlesOrderByRelevanceInput = {
    fields: ArticlesOrderByRelevanceFieldEnum | ArticlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatGroupsNullableScalarRelationFilter = {
    is?: ChatGroupsWhereInput | null
    isNot?: ChatGroupsWhereInput | null
  }

  export type ChatGroupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMembersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupMembersListRelationFilter = {
    every?: ChatGroupMembersWhereInput
    some?: ChatGroupMembersWhereInput
    none?: ChatGroupMembersWhereInput
  }

  export type ChatMessagesListRelationFilter = {
    every?: ChatMessagesWhereInput
    some?: ChatMessagesWhereInput
    none?: ChatMessagesWhereInput
  }

  export type ChatGroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupsOrderByRelevanceInput = {
    fields: ChatGroupsOrderByRelevanceFieldEnum | ChatGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatGroupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatGroupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupsSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatMessagesOrderByRelevanceInput = {
    fields: ChatMessagesOrderByRelevanceFieldEnum | ChatMessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type ChatMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    messageText?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesSumOrderByAggregateInput = {
    id?: SortOrder
    chatGroupId?: SortOrder
    userIdSender?: SortOrder
    deletedBy?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodsOrderByRelevanceInput = {
    fields: FoodsOrderByRelevanceFieldEnum | FoodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsNullableScalarRelationFilter = {
    is?: FoodsWhereInput | null
    isNot?: FoodsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ArticlesListRelationFilter = {
    every?: ArticlesWhereInput
    some?: ArticlesWhereInput
    none?: ArticlesWhereInput
  }

  export type ChatGroupsListRelationFilter = {
    every?: ChatGroupsWhereInput
    some?: ChatGroupsWhereInput
    none?: ChatGroupsWhereInput
  }

  export type ArticlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeChangePass?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeChangePass?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    password?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codeChangePass?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutArticlesInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutArticlesInput
    upsert?: UsersUpsertWithoutArticlesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutArticlesInput, UsersUpdateWithoutArticlesInput>, UsersUncheckedUpdateWithoutArticlesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatGroupsCreateNestedOneWithoutChatGroupMembersInput = {
    create?: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatGroupMembersInput
    connect?: ChatGroupsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupMembersInput
    upsert?: UsersUpsertWithoutChatGroupMembersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatGroupMembersInput, UsersUpdateWithoutChatGroupMembersInput>, UsersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatGroupMembersInput
    upsert?: ChatGroupsUpsertWithoutChatGroupMembersInput
    disconnect?: ChatGroupsWhereInput | boolean
    delete?: ChatGroupsWhereInput | boolean
    connect?: ChatGroupsWhereUniqueInput
    update?: XOR<XOR<ChatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput, ChatGroupsUpdateWithoutChatGroupMembersInput>, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type ChatGroupMembersCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutChatGroupsInput = {
    create?: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupsInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatMessagesCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutChatGroupsNestedInput = {
    create?: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatGroupsInput
    upsert?: UsersUpsertWithoutChatGroupsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatGroupsInput, UsersUpdateWithoutChatGroupsInput>, UsersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput | ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput> | ChatGroupMembersCreateWithoutChatGroupsInput[] | ChatGroupMembersUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutChatGroupsInput | ChatGroupMembersCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatGroupMembersCreateManyChatGroupsInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput | ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput | ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput> | ChatMessagesCreateWithoutChatGroupsInput[] | ChatMessagesUncheckedCreateWithoutChatGroupsInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutChatGroupsInput | ChatMessagesCreateOrConnectWithoutChatGroupsInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput[]
    createMany?: ChatMessagesCreateManyChatGroupsInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput | ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput | ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatGroupsCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatMessagesInput
    connect?: ChatGroupsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type ChatGroupsUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutChatMessagesInput
    upsert?: ChatGroupsUpsertWithoutChatMessagesInput
    disconnect?: ChatGroupsWhereInput | boolean
    delete?: ChatGroupsWhereInput | boolean
    connect?: ChatGroupsWhereUniqueInput
    update?: XOR<XOR<ChatGroupsUpdateToOneWithWhereWithoutChatMessagesInput, ChatGroupsUpdateWithoutChatMessagesInput>, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UsersUpdateOneWithoutChatMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatMessagesInput
    upsert?: UsersUpsertWithoutChatMessagesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatMessagesInput, UsersUpdateWithoutChatMessagesInput>, UsersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type OrdersCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type FoodsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    connect?: FoodsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    upsert?: FoodsUpsertWithoutOrdersInput
    disconnect?: FoodsWhereInput | boolean
    delete?: FoodsWhereInput | boolean
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutOrdersInput, FoodsUpdateWithoutOrdersInput>, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type ArticlesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type ChatGroupMembersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatGroupsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
  }

  export type ChatMessagesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ArticlesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
  }

  export type ChatGroupsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ArticlesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUsersInput | ArticlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUsersInput | ArticlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUsersInput | ArticlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type ChatGroupMembersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutUsersInput | ChatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatGroupsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupsUpsertWithWhereUniqueWithoutUsersInput | ChatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    set?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    disconnect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    delete?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    update?: ChatGroupsUpdateWithWhereUniqueWithoutUsersInput | ChatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupsUpdateManyWithWhereWithoutUsersInput | ChatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
  }

  export type ChatMessagesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutUsersInput | ChatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutUsersInput | ChatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutUsersInput | ChatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ArticlesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUsersInput | ArticlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUsersInput | ArticlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUsersInput | ArticlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput> | ChatGroupMembersCreateWithoutUsersInput[] | ChatGroupMembersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupMembersCreateOrConnectWithoutUsersInput | ChatGroupMembersCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupMembersCreateManyUsersInputEnvelope
    set?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    disconnect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    delete?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    connect?: ChatGroupMembersWhereUniqueInput | ChatGroupMembersWhereUniqueInput[]
    update?: ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput | ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupMembersUpdateManyWithWhereWithoutUsersInput | ChatGroupMembersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
  }

  export type ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput> | ChatGroupsCreateWithoutUsersInput[] | ChatGroupsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatGroupsCreateOrConnectWithoutUsersInput | ChatGroupsCreateOrConnectWithoutUsersInput[]
    upsert?: ChatGroupsUpsertWithWhereUniqueWithoutUsersInput | ChatGroupsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatGroupsCreateManyUsersInputEnvelope
    set?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    disconnect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    delete?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    connect?: ChatGroupsWhereUniqueInput | ChatGroupsWhereUniqueInput[]
    update?: ChatGroupsUpdateWithWhereUniqueWithoutUsersInput | ChatGroupsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatGroupsUpdateManyWithWhereWithoutUsersInput | ChatGroupsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput> | ChatMessagesCreateWithoutUsersInput[] | ChatMessagesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutUsersInput | ChatMessagesCreateOrConnectWithoutUsersInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutUsersInput | ChatMessagesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ChatMessagesCreateManyUsersInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutUsersInput | ChatMessagesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutUsersInput | ChatMessagesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersCreateWithoutArticlesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutArticlesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutArticlesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
  }

  export type UsersUpsertWithoutArticlesInput = {
    update: XOR<UsersUpdateWithoutArticlesInput, UsersUncheckedUpdateWithoutArticlesInput>
    create: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutArticlesInput, UsersUncheckedUpdateWithoutArticlesInput>
  }

  export type UsersUpdateWithoutArticlesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutChatGroupMembersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatGroupMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsCreateWithoutChatGroupMembersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutChatGroupMembersInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutChatGroupMembersInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
  }

  export type UsersUpsertWithoutChatGroupMembersInput = {
    update: XOR<UsersUpdateWithoutChatGroupMembersInput, UsersUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<UsersCreateWithoutChatGroupMembersInput, UsersUncheckedCreateWithoutChatGroupMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatGroupMembersInput, UsersUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type UsersUpdateWithoutChatGroupMembersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ChatGroupsUpsertWithoutChatGroupMembersInput = {
    update: XOR<ChatGroupsUpdateWithoutChatGroupMembersInput, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
    create: XOR<ChatGroupsCreateWithoutChatGroupMembersInput, ChatGroupsUncheckedCreateWithoutChatGroupMembersInput>
    where?: ChatGroupsWhereInput
  }

  export type ChatGroupsUpdateToOneWithWhereWithoutChatGroupMembersInput = {
    where?: ChatGroupsWhereInput
    data: XOR<ChatGroupsUpdateWithoutChatGroupMembersInput, ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput>
  }

  export type ChatGroupsUpdateWithoutChatGroupMembersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutChatGroupMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupMembersCreateWithoutChatGroupsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersCreateOrConnectWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    create: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersCreateManyChatGroupsInputEnvelope = {
    data: ChatGroupMembersCreateManyChatGroupsInput | ChatGroupMembersCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutChatGroupsInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatGroupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesCreateWithoutChatGroupsInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutChatGroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesCreateManyChatGroupsInputEnvelope = {
    data: ChatMessagesCreateManyChatGroupsInput | ChatMessagesCreateManyChatGroupsInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupMembersUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    update: XOR<ChatGroupMembersUpdateWithoutChatGroupsInput, ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<ChatGroupMembersCreateWithoutChatGroupsInput, ChatGroupMembersUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatGroupMembersWhereUniqueInput
    data: XOR<ChatGroupMembersUpdateWithoutChatGroupsInput, ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatGroupMembersUpdateManyWithWhereWithoutChatGroupsInput = {
    where: ChatGroupMembersScalarWhereInput
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type ChatGroupMembersScalarWhereInput = {
    AND?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
    OR?: ChatGroupMembersScalarWhereInput[]
    NOT?: ChatGroupMembersScalarWhereInput | ChatGroupMembersScalarWhereInput[]
    id?: IntFilter<"ChatGroupMembers"> | number
    userId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    chatGroupId?: IntNullableFilter<"ChatGroupMembers"> | number | null
    deletedBy?: IntFilter<"ChatGroupMembers"> | number
    isDeleted?: BoolFilter<"ChatGroupMembers"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroupMembers"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupMembers"> | Date | string
  }

  export type UsersUpsertWithoutChatGroupsInput = {
    update: XOR<UsersUpdateWithoutChatGroupsInput, UsersUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<UsersCreateWithoutChatGroupsInput, UsersUncheckedCreateWithoutChatGroupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatGroupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatGroupsInput, UsersUncheckedUpdateWithoutChatGroupsInput>
  }

  export type UsersUpdateWithoutChatGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutChatGroupsInput, ChatMessagesUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<ChatMessagesCreateWithoutChatGroupsInput, ChatMessagesUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutChatGroupsInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutChatGroupsInput, ChatMessagesUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutChatGroupsInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutChatGroupsInput>
  }

  export type ChatMessagesScalarWhereInput = {
    AND?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    OR?: ChatMessagesScalarWhereInput[]
    NOT?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatGroupId?: IntNullableFilter<"ChatMessages"> | number | null
    userIdSender?: IntNullableFilter<"ChatMessages"> | number | null
    messageText?: StringNullableFilter<"ChatMessages"> | string | null
    deletedBy?: IntFilter<"ChatMessages"> | number
    isDeleted?: BoolFilter<"ChatMessages"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatMessages"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
  }

  export type ChatGroupsCreateWithoutChatMessagesInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    Users?: UsersCreateNestedOneWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    name?: string | null
    ownerId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutChatMessagesInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
  }

  export type UsersCreateWithoutChatMessagesInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
  }

  export type ChatGroupsUpsertWithoutChatMessagesInput = {
    update: XOR<ChatGroupsUpdateWithoutChatMessagesInput, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChatGroupsCreateWithoutChatMessagesInput, ChatGroupsUncheckedCreateWithoutChatMessagesInput>
    where?: ChatGroupsWhereInput
  }

  export type ChatGroupsUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChatGroupsWhereInput
    data: XOR<ChatGroupsUpdateWithoutChatMessagesInput, ChatGroupsUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatGroupsUpdateWithoutChatMessagesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    Users?: UsersUpdateOneWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type UsersUpsertWithoutChatMessagesInput = {
    update: XOR<UsersUpdateWithoutChatMessagesInput, UsersUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UsersCreateWithoutChatMessagesInput, UsersUncheckedCreateWithoutChatMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatMessagesInput, UsersUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UsersUpdateWithoutChatMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type OrdersCreateWithoutFoodsInput = {
    Users?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutFoodsInput = {
    id?: number
    userId?: number | null
  }

  export type OrdersCreateOrConnectWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersCreateManyFoodsInputEnvelope = {
    data: OrdersCreateManyFoodsInput | OrdersCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutFoodsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutFoodsInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
  }

  export type UsersCreateWithoutOrdersInput = {
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    fullName?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    password?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    codeChangePass?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutUsersInput
    ChatGroups?: ChatGroupsUncheckedCreateNestedManyWithoutUsersInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type FoodsCreateWithoutOrdersInput = {
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsCreateOrConnectWithoutOrdersInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codeChangePass?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutUsersNestedInput
    ChatGroups?: ChatGroupsUncheckedUpdateManyWithoutUsersNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type FoodsUpsertWithoutOrdersInput = {
    update: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesCreateWithoutUsersInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesCreateOrConnectWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput>
  }

  export type ArticlesCreateManyUsersInputEnvelope = {
    data: ArticlesCreateManyUsersInput | ArticlesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupMembersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatGroupMembersInput
  }

  export type ChatGroupMembersUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersCreateOrConnectWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    create: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupMembersCreateManyUsersInputEnvelope = {
    data: ChatGroupMembersCreateManyUsersInput | ChatGroupMembersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChatGroupsCreateWithoutUsersInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsUncheckedCreateWithoutUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedCreateNestedManyWithoutChatGroupsInput
    ChatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutChatGroupsInput
  }

  export type ChatGroupsCreateOrConnectWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    create: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupsCreateManyUsersInputEnvelope = {
    data: ChatGroupsCreateManyUsersInput | ChatGroupsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessagesCreateWithoutUsersInput = {
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatGroups?: ChatGroupsCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutUsersInput = {
    id?: number
    chatGroupId?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type ChatMessagesCreateManyUsersInputEnvelope = {
    data: ChatMessagesCreateManyUsersInput | ChatMessagesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUsersInput = {
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUsersInput = {
    id?: number
    foodId?: number | null
  }

  export type OrdersCreateOrConnectWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersCreateManyUsersInputEnvelope = {
    data: OrdersCreateManyUsersInput | OrdersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ArticlesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    update: XOR<ArticlesUpdateWithoutUsersInput, ArticlesUncheckedUpdateWithoutUsersInput>
    create: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput>
  }

  export type ArticlesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    data: XOR<ArticlesUpdateWithoutUsersInput, ArticlesUncheckedUpdateWithoutUsersInput>
  }

  export type ArticlesUpdateManyWithWhereWithoutUsersInput = {
    where: ArticlesScalarWhereInput
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ArticlesScalarWhereInput = {
    AND?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    OR?: ArticlesScalarWhereInput[]
    NOT?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    id?: IntFilter<"Articles"> | number
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntNullableFilter<"Articles"> | number | null
    deletedBy?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    deletedAt?: DateTimeNullableFilter<"Articles"> | Date | string | null
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }

  export type ChatGroupMembersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    update: XOR<ChatGroupMembersUpdateWithoutUsersInput, ChatGroupMembersUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatGroupMembersCreateWithoutUsersInput, ChatGroupMembersUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupMembersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupMembersWhereUniqueInput
    data: XOR<ChatGroupMembersUpdateWithoutUsersInput, ChatGroupMembersUncheckedUpdateWithoutUsersInput>
  }

  export type ChatGroupMembersUpdateManyWithWhereWithoutUsersInput = {
    where: ChatGroupMembersScalarWhereInput
    data: XOR<ChatGroupMembersUpdateManyMutationInput, ChatGroupMembersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatGroupsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    update: XOR<ChatGroupsUpdateWithoutUsersInput, ChatGroupsUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatGroupsCreateWithoutUsersInput, ChatGroupsUncheckedCreateWithoutUsersInput>
  }

  export type ChatGroupsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatGroupsWhereUniqueInput
    data: XOR<ChatGroupsUpdateWithoutUsersInput, ChatGroupsUncheckedUpdateWithoutUsersInput>
  }

  export type ChatGroupsUpdateManyWithWhereWithoutUsersInput = {
    where: ChatGroupsScalarWhereInput
    data: XOR<ChatGroupsUpdateManyMutationInput, ChatGroupsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatGroupsScalarWhereInput = {
    AND?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
    OR?: ChatGroupsScalarWhereInput[]
    NOT?: ChatGroupsScalarWhereInput | ChatGroupsScalarWhereInput[]
    id?: IntFilter<"ChatGroups"> | number
    name?: StringNullableFilter<"ChatGroups"> | string | null
    ownerId?: IntNullableFilter<"ChatGroups"> | number | null
    deletedBy?: IntFilter<"ChatGroups"> | number
    isDeleted?: BoolFilter<"ChatGroups"> | boolean
    deletedAt?: DateTimeNullableFilter<"ChatGroups"> | Date | string | null
    createdAt?: DateTimeFilter<"ChatGroups"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroups"> | Date | string
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutUsersInput, ChatMessagesUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatMessagesCreateWithoutUsersInput, ChatMessagesUncheckedCreateWithoutUsersInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutUsersInput, ChatMessagesUncheckedUpdateWithoutUsersInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutUsersInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUsersInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ChatGroupMembersCreateManyChatGroupsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateManyChatGroupsInput = {
    id?: number
    userIdSender?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersUpdateWithoutChatGroupsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUpdateWithoutChatGroupsInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutChatGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userIdSender?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyFoodsInput = {
    id?: number
    userId?: number | null
  }

  export type OrdersUpdateWithoutFoodsInput = {
    Users?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticlesCreateManyUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupMembersCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupsCreateManyUsersInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateManyUsersInput = {
    id?: number
    chatGroupId?: number | null
    messageText?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyUsersInput = {
    id?: number
    foodId?: number | null
  }

  export type ArticlesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneWithoutChatGroupMembersNestedInput
  }

  export type ChatGroupMembersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupMembersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupsUpdateWithoutUsersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroupMembers?: ChatGroupMembersUncheckedUpdateManyWithoutChatGroupsNestedInput
    ChatMessages?: ChatMessagesUncheckedUpdateManyWithoutChatGroupsNestedInput
  }

  export type ChatGroupsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUpdateWithoutUsersInput = {
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatGroups?: ChatGroupsUpdateOneWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatGroupId?: NullableIntFieldUpdateOperationsInput | number | null
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUsersInput = {
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
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