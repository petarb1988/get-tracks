const app = require('../../app');
const request = require('supertest');


describe('GET /tracks', () => {

    it('GET /tracks/sorted?sortBy=duration should return array of tracks sorted by duration', async () => {
        const res = await request(app).get('/tracks/sorted?sortBy=duration');

        expect(res.statusCode).toEqual(200);
        expect(res.body[0].id).toEqual(770293952);
    });

    it('GET /tracks/sorted?sortBy=name should return array of tracks sorted by name', async () => {
        const res = await request(app).get('/tracks/sorted?sortBy=name');

        expect(res.statusCode).toEqual(200);
        expect(res.body[0].artist.name).toEqual('Billie Eilish');
    });

    it('GET /tracks:id should return track with given id', async () => {
        const res = await request(app).get('/tracks/892697762');

        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(892697762);
        expect(res.body.title).toEqual('Zbog Tebe');
    });

    it('GET /tracks should return an array of all tracks', async () => {
        const res = await request(app).get('/tracks');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('duration');
    });
});