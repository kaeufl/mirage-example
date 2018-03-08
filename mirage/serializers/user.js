import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  // By default the RESTSerializer does not interpret the "?include=things" query parameter
  // (it's a part of JSONAPI after all). Setting the "include" property has a similar effect though.
  // So in order to have any relationship data included, we need to either use Option A, or B, both leading to a
  // different issue.

  // ###################################################################################################################
  // Option A: Demonstration of issue #1:
  // Uncommenting those two lines yields the wrong id format, i.e. just "1", rather than {id: "1", type: "picture"}

  // serializeIds: 'always',
  // include: [],

  // ###################################################################################################################
  // Option B: Demonstration of issue #2
  // Uncommenting the following leads to a wrong relationship key, namely "things", rather than "thingIds":

  // serializeIds: 'included',
  // include: ['things'],

  keyForRelationshipIds(relationship) {
    // Since we have overridden "keyForRelationship" on the ED side to adhere to our custom relationship id format,
    // we need to do the same in the mirage serializer.

    // NB1: issue #2 goes away if we don't do this customization, since in mirage's RestSerializer, by default,
    // keyForRelationshipIds and keyForRelationship produce the same result!

    // NB2: it doesn't help the confusion that the corresponding hook on the ED side is called "keyForRelationship",
    // whereas mirage knows both the "keyForRelationshipIds" and the "keyForRelationship" hooks.

    return `${relationship}Ids`;
  }
});
