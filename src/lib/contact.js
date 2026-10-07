export const contactEmail = 'kgpatino.wit@gmail.com';

export function validateContact(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Please enter your name.';
    if (!values.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) errors.message = 'Please enter a message.';
    return errors;
}

export async function submitContact(values, fetchRequest = fetch) {
    const response = await fetchRequest(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
        }),
        signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error('Submission failed');
    const result = await response.json();
    if (result.success !== true && result.success !== 'true') {
        throw new Error('Submission was not accepted');
    }
}
