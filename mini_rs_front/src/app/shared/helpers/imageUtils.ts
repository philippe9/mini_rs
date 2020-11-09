
/**
 * @classdesc Helper to manipulate images.
 * @author Melo
 * @version 1.0.0
 * @copyright Seed Developpers 2019
 * @name ImageUtils
 */

export class ImageUtils {

    /**
     * @constructor
     */
    constructor() {

    }
    /**
     * Resize an image
     * @param height New height
     * @param width New width
     * @returns File(image)
     */
    imageResizer(height, width, file) {
        var reader = new FileReader();
        var self = this;
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var link: any = e.target;
            //Initiate the JavaScript Image object.
            console.log(link);
            var image = new Image();
            //Set the Base64 string return from FileReader as source.
            image.src = link.result;
            //Validate the File Height and Width.
            image.onload = function () {
                image.height = height;
                image.width = width;

                return image;

            }
        }

    }

    /**
     * Give the size of the image
     * @returns object
     */
    imageSize(file) {
        var reader = new FileReader();
        var self = this;
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var link: any = e.target;
            //Initiate the JavaScript Image object.
            console.log(link);
            var image = new Image();
            //Set the Base64 string return from FileReader as source.
            image.src = link.result;
            //Validate the File Height and Width.
            image.onload = function () {
                var height = image.height;
                var width = image.width;
                console.log(height, width);
                return { 'height': height, 'width': width };
            };
        }
    }

    videoSize() {

    }
    /**
     * Gets a file and tels if it is an image
     * @param {File} file File to be tested
     * @returns {Boolean} Result of test
     */
    static isImage(file: File): Boolean {
        if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(file.name)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Give the size of a file
     * @param {File} file File to be tested
     * @returns {Number} Size of file in bytes
     */
    static getFileSize(file: File): Number {
        return file.size;
    }
}