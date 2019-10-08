# Gesell REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## GetOwner

`GET` `/gesell/denom-prefixes/{denom-prefix}/owner`

### Response

```TypeScript
interface QueryResOwner {
  owner: string;
  auto_sell?: AutoSell;
}
```

## SetOwner

`PUT` `GET` `/gesell/denom-prefixes/{denom-prefix}/owner`

### Request

```TypeScript
interface SetOwnerReq {
  base_req: BaseReq; // cosmos-client-ts
  owner: string;
  new_owner: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## SetAutoSell

`PUT` `/gesell/denom-prefixes/{denom-prefix}/auto-sell`

### Request

```TypeScript
interface UnsetAutoSellReq {
  base_req: BaseReq; // cosmos-client-ts
  owner: Owner;
  auto_sell: AutoSell;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## UnsetAutoSell

`DELETE` `/gesell/denom-prefixes/{denom-prefix}/auto-sell`

### Request

```TypeScript
interface UnsetAutoSellReq {
  base_req: BaseReq; // cosmos-client-ts
  owner: Owner;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## MintToken

`POST` `/gesell/denom-prefixes/{denom-prefix}/mint`

### Request

```TypeScript
interface MintTokenReq {
  base_req: BaseReq; // cosmos-client-ts
  to_address: string;
  expiration: Expiration;
  amount: number;
  owner: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## BuyToken

`POST` `/gesell/denom-prefixes/{denom-prefix}/buy`

### Request

```TypeScript
interface BuyTokenReq {
  base_req: BaseReq; // cosmos-client-ts
  address: string;
  expiration: Expiration;
  Amount: number;
}
```

### Response

`StdTx`@`cosmos-client-ts`
