export const getCats = URL => {

    console.log(URL);

    return {
        data: [{
            id: '100',
            name: 'fake_name',
            temperament: 'some temperament',
            description: 'some description'
        }]
    }
}