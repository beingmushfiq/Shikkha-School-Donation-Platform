import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { auth, db } from '@/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore, if not create
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          role: 'donor', // Default role
          createdAt: new Date().toISOString(),
        });
      }

      toast.success(`Welcome back, ${user.displayName}!`);
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold">Welcome to Shikkha</CardTitle>
              <CardDescription>Login to manage your donations and sponsorships.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full h-12 text-lg font-medium flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors"
              onClick={handleGoogleLogin}
            >
              <Chrome className="h-5 w-5" />
              Continue with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-muted-foreground" disabled>
              Email & Password (Coming Soon)
            </Button>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
