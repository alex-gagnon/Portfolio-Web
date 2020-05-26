function modal(modalId, imageId, modalImgId, captionId) {
    var modal = document.getElementById(modalId);

    // Get the image and insert it inside the modal
    var img = document.getElementById(imageId);
    var modalImg = document.getElementById(modalImgId)
    var captionText = document.getElementById(captionId)

    img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
        modal.style.display = "none";
    }
}

export default modal