# Cheque REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## GetOwner
`GET` `/owner`

### Response

```TypeScript
{ owner: string; }
```

## SetOwner

`PUT` `/owner`

### Request

```TypeScript
{
  owner: string;
  new_owner: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## Mint

`POST` `/mint`

### Response

`StdTx`@`cosmos-client-ts`

## burn
`POST` `/burn`

### Response

`StdTx`@`cosmos-client-ts`
