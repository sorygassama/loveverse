export const metadata = {
    title: 'LoveVerse',
    description: 'Notre univers d\'amour priv?',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
