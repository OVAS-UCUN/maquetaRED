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

@media only screen and (max-width: 1810px) and (min-width: 1525px) {
    #page-mod-scorm-player #scormpage #scorm_content {
        height: 800px !important;
    }
    
    #scorm_layout{
        height: 760px !important;
    }
}

`;
parent.document.head.appendChild(style);