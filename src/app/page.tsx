import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 p-4">
      <h2 className="text-6xl font-bold mb-4 text-slate-50 text-center hover:backdrop-blur-m">NoSQL Injection</h2>
      <p className="mb-4 px-6 text-lg">
        NoSQL injection is a type of security vulnerability that allows an attacker to manipulate
        NoSQL database queries, resulting in unauthorized access or data leakage.
        It can occur when user input is not properly validated or sanitized before being used in database queries.
        NoSQL injection attacks are similar to SQL injection attacks, but they target NoSQL databases.
      </p>
      <h3 className="text-2xl font-bold mb-2 pl-3 mx-2">Examples of NoSQL Injection</h3>
      <div className="py-2">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-xl font-bold mb-6">NoSQL Injection Examples</h2> */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 px-2">URL Examples:</h3>
          <pre className="p-4 text-black bg-slate-400 rounded-lg">
            {`username[$ne]=toto&password[$regex]=a.{2}
username[$ne]=toto&password[$regex]=b.{2}
...
username[$ne]=toto&password[$regex]=m.{2}
username[$ne]=toto&password[$regex]=md.{1}
username[$ne]=toto&password[$regex]=mdp

username[$ne]=toto&password[$regex]=m.*
username[$ne]=toto&password[$regex]=md.*`}

          </pre>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">JSON Examples:</h3>
          <pre className="p-4 bg-slate-400 text-black rounded-lg hover:backdrop-blur-lg">
            {`{"username": {"$eq": "admin"}, "password": {"$regex": "^m" }}
{"username": {"$eq": "admin"}, "password": {"$regex": "^md" }}
{"username": {"$eq": "admin"}, "password": {"$regex": "^mdp" }}`}
          </pre>
        </div>
      </div>
      </div>
      <p className="p-6 text-lg">
        To protect against NoSQL injection, machine learning models like BERT can be used for classification of payloads as malicious or benign.
        BERT (Bidirectional Encoder Representations from Transformers) is a powerful pre-trained natural language processing model
        that can be fine-tuned for specific tasks, such as NoSQL injection detection.
        By analyzing the structure and content of queries, BERT can identify potentially malicious payloads and prevent them from being executed.
      </p>
    </div>
    </div>
  )
} 