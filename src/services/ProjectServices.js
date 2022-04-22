export async function getAllProjects() {
    try {
        const response = await fetch('https://cole.pythonanywhere.com/api/v1/projects/');
        return await response.json();
    } catch (error) {
        return [];
    }
}