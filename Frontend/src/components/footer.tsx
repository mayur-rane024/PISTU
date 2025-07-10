const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-neutral-950 dark:text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} PISTU. All Rights Reserved.</p>
        <p className="mt-2">
          Follow us on social media for the latest updates!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
