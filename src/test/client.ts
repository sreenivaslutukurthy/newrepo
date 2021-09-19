import * as superteste from 'supertest';

export function client(): superteste.SuperTest<superteste.Test> {
    return superteste('https://api.teleport.org/api/');
}
