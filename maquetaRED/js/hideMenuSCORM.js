var style = document.createElement('style');
style.innerHTML = `
#scorm_toc_toggle,
#scorm_navpanel,
#scorm_toc {
    display: none !important;
}

#scorm_content {
    width: 100% !important;
}

#page-mod-scorm-player #scormpage #scorm_object {
    width: 100% !important;
    height: 100% !important;
}


`;
parent.document.head.appendChild(style);