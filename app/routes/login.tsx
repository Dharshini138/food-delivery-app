import Message from "../components/Message";

// Inside component render
{error && <Message text={error} type="error" onClose={() => setError("")} />}
