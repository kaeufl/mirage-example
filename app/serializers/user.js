import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  keyForRelationship(key /*, relationship, method*/) {
    // Here we implement our custom format for relationship keys.
    return `${key}Ids`;
  }
});
