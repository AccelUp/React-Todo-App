// @types/my-app-types/knexfile.d.ts

declare module "my-app-types/knexfile" {
  const KnexConfigs: Record<string, any>; // You can use 'any' for now
  export default KnexConfigs;
}
