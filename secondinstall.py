# dlp_canary_mock_amer.py
# Purpose: DLP testing only — all credentials are FAKE and NON-FUNCTIONAL

import textwrap
from datetime import datetime

CANARIES = {
    # Login / username patterns
    "LOGIN_USERNAME": "amer.admin",
    "LOGIN_EMAIL": "amer.nejma@fake-company.local",

    # Password patterns (explicit name included)
    "LOGIN_PASSWORD": "Amer@P@ssw0rd_Fake_123!",
    "DB_PASSWORD": "DB_Amer_Secret_NotReal_987!",
    "ADMIN_PASS": "AdminAmer_ChangeMe_FAKE_000",

    # API / token-like values with name embedded
    "GITHUB_TOKEN": "ghp_amer" + "x" * 33,
    "STRIPE_LIVE_KEY": "sk_live_amer_" + "d" * 20,

    # Cloud-style credentials
    "AWS_ACCESS_KEY_ID": "AKIAAMER" + "A" * 12,
    "AWS_SECRET_ACCESS_KEY": "AmerFakeSecretAccessKey_DoNotUse_123456",

    # JWT-like token (name inside payload)
    "JWT": (
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
        "eyJ1c2VyIjoiQW1lciBOZWptYSIsInJvbGUiOiJhZG1pbiJ9."
        "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    ),

    # Private key block (classic high-severity trigger)
    "PRIVATE_KEY_BLOCK": textwrap.dedent("""\
        -----BEGIN PRIVATE KEY-----
        MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD
        AMERFAKEAMERFAKEAMERFAKEAMERFAKEAMERFAKEAMERFAKE
        AMERFAKEAMERFAKEAMERFAKEAMERFAKEAMERFAKEAMERFAKE
        -----END PRIVATE KEY-----
    """),

    # Connection strings with Amer in username
    "POSTGRES_URL": "postgresql://amer_admin:Amer_DB_Pass@db.internal.local:5432/appdb",
    "MONGODB_URI": "mongodb+srv://amerRoot:AmerMongoFake@cluster0.fake.mongodb.net/app",
}

def main():
    print("=== DLP Canary Output (FAKE – AMER TAGGED) ===")
    print("Generated at:", datetime.utcnow().isoformat() + "Z\n")

    for k, v in CANARIES.items():
        print(f"[{k}]")
        print(v)
        print()

    # .env-style dump (often triggers strongest DLP rules)
    print("=== .env style ===")
    for k, v in CANARIES.items():
        single_line = " ".join(str(v).splitlines())
        print(f"{k}={single_line[:200]}")

if __name__ == "__main__":
    main()
