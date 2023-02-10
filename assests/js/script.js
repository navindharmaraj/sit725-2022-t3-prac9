const submitForm = () => {

    let formData = {};
    formData.title = $('#title').val();
    formData.image = $('#image').val();
    formData.link = $('#link').val();
    formData.desc = $('#desc').val();
    console.log("Form Data Submitted: ", formData);
     postProjects(formData);
     getProjects();
     $('#modal1').modal('hide');
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="img/' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
$(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    })
    getProjects();
   
    $('.modal').modal();
});
const getProjects = () => {
    $.get('/car/get', (response) => {
        if (response.statusCode == 200) {
            console.log(852)
            addCards(response.data);
        }
    })
}
const postProjects = async (collectionData) => {
    await $.post('/car/add',collectionData, (response) => {
        if (response.statusCode == 200) {
            console.log(999)
            addCards(response.data);
        }
    })
}