const coreBody = document.getElementById("coreBody");


coreBody.addEventListener("mousemove", e => {
    coreBody.style.background = `radial-gradient(circle farthest-side at ${e.clientX}px ${e.clientY}px, #8391ff 0%, transparent 50%)`
})