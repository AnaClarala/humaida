/**
 * Modélisation d'un lien Backend : nom et lien.
 */
export class BackendLink {
  name: string;
  href: string;
  constructor(params: any) {
    Object.assign(this, params);
  }
}

export interface Link {
  href: string;
  templated: string;
}
export interface Links {
  self: Link;
  health: Link;
  'health-path': Link;
  info: string;
}

export interface Actuator {
  _links: Links;
}
