"use strict";
function pathToJSON(fileObjects, extra=undefined) {
    const outputPath = {};
    let current;
    for (const path of fileObjects) {
        current = outputPath;
        let paths = path.split('/');
        paths.forEach((segment, index) => {
            if (segment === '') return;
            if (!(segment in current)) {
                current[segment] = {};
                if (index == paths.length - 1) {
                    current[segment] = extra||{};
                }
            }
            current = current[segment];
        });
    }
    return outputPath;
}

module.exports = pathToJSON;
