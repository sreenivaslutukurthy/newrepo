import { StatusCodes } from 'http-status-codes';
import { client } from '../client';



describe('GET Cities', function () {
    it('/GET - Cities with existing geonameid', async () => {
        const response = await client()
            .get('cities/geonameid:5391959/')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK);


    });

    it('/GET - Cities with nonexistent geonameid', async () => {
        const response = await client()
            .get('cities/geonameid:5398719/')
            .set('Accept', 'application/json')
            .expect(StatusCodes.NOT_FOUND);

    });

    it('/GET - Cities with invalid geonameid', async () => {
        const response = await client()
            .get('cities/xyz/')
            .set('Accept', 'application/json')
            .expect(StatusCodes.BAD_REQUEST);


    });

 
});


