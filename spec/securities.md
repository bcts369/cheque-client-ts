# Securities REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## GetOwner

`GET` `/securities/owner`

### Response

```TypeScript
{ owner: string; }
```

## SetOwner

`PUT` `/securities/owner`

### Request

```TypeScript
interface SetOwnerEq {
  base_req: BaseReq; // cosmos-client-ts
  owner: string;
  new_owner: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## MintToken

`POST` `/securities/mint`

### Request

```TypeScript
interface MintTokenReq {
  base_req: BaseReq; // cosmos-client-ts
  to_address: string;
  amount: Coin[]; // cosmos-client-ts
}
```

### Response

`StdTx`@`cosmos-client-ts`

## BurnToken

`POST` `/securities/burn`

### Request

```TypeScript
interface BurnTokenReq {
  base_req: BaseReq; // cosmos-client-ts
  from_address: string;
  amount: Coin[]; // cosmos-client-ts
}
```

### Response

`StdTx`@`cosmos-client-ts`
