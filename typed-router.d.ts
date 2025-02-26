/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/data-request/[id]': RouteRecordInfo<'/data-request/[id]', '/data-request/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/data-request/create': RouteRecordInfo<'/data-request/create', '/data-request/create', Record<never, never>, Record<never, never>>,
    '/data-source/[id]': RouteRecordInfo<'/data-source/[id]', '/data-source/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/data-source/create': RouteRecordInfo<'/data-source/create', '/data-source/create', Record<never, never>, Record<never, never>>,
    '/donate': RouteRecordInfo<'/donate', '/donate', Record<never, never>, Record<never, never>>,
    '/jobs': RouteRecordInfo<'/jobs', '/jobs', Record<never, never>, Record<never, never>>,
    '/search/results': RouteRecordInfo<'/search/results', '/search/results', Record<never, never>, Record<never, never>>,
    '/test/toast': RouteRecordInfo<'/test/toast', '/test/toast', Record<never, never>, Record<never, never>>,
    '/validate/email': RouteRecordInfo<'/validate/email', '/validate/email', Record<never, never>, Record<never, never>>,
  }
}
