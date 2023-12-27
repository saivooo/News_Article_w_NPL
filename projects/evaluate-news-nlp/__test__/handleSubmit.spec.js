import { handleSubmit } from "../src/client/js/formHandler"

describe("Handle submit function", () => {
    test("it should take the user's form input, send it to meaningcloud api for their text to be analyzed. In response, the api will return a json object of the analysis of the user's text.", () => {
        // actual test
        const input = "testing function...";
        const output = {
            "sentence": [
                {
                    "text": "testing function...",
                    "inip": "0",
                    "endp": "18",
                    "bop": "y",
                    "confidence": "100",
                    "score_tag": "NONE",
                    "agreement": "AGREEMENT",
                    "segment_list": [
                        {
                            "text": "testing function",
                            "segment_type": "secondary",
                            "inip": "0",
                            "endp": "15",
                            "confidence": "100",
                            "score_tag": "NONE",
                            "agreement": "AGREEMENT",
                            "polarity_term_list": []
                        },
                        {
                            "text": "...",
                            "segment_type": "secondary",
                            "inip": "16",
                            "endp": "18",
                            "confidence": "100",
                            "score_tag": "NONE",
                            "agreement": "AGREEMENT",
                            "polarity_term_list": []
                        }
                    ],
                    "sentimented_entity_list": [],
                    "sentimented_concept_list": []
                }
            ],
            "subjectivity": "OBJECTIVE",
            "confidence": "100",
            "irony": "NONIRONIC"
        };
        expect(handleSubmit(input)).toEqual(output);
    });
}); 