export const createNewTag = async (tag) => {
    let snippetCreated = null;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tag)
        };
        const response = fetch("http://localhost:8080/tag", requestOptions);
        if(response.ok){
            snippetCreated = await response.json();
        } else {    
            throw new Error("Falha ao criar tag");
        }
    } catch (error) {
        console.log("Error: " + error);
    } finally {
        return snippetCreated;
    }
}

export const getTags = async () => {
    let snippets = [];
    try {
        const response = await fetch("http://localhost:8080/tag");
        if (response.ok){
            snippets = await response.json();
        } else {
            throw new Error("Failed to fetch tags");
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return snippets;
    }
}

export const editTag = async (tag) => {
    let edited = false;
    try {
        const requestOptions = {
            "method": "put",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(tag)
        }
        const response = await fetch("http://localhost:8080/tag/" + tag.id, requestOptions);
        if(response.ok){
            edited = true;
        } else {
            throw new Error("Failed to edit tag with id " + tag.id);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return edited;
    }
}

export const deleteTag = async (tagId) => {
    let removed = false;
    try {
        const requestOptions = {
            "method": "delete",
            "headers": {"Content-Type": "application/json"},
            "body": ""
        }
        const response = await fetch("http://localhost:8080/tag/" + tagId, requestOptions);
        if(response.ok){
            removed = true;
        } else {
            throw new Error("Failed to remove tag with id " + tagId);
        }
    } catch (error) {
        console.error("Error: " + error);
    } finally {
        return removed;
    }
}
