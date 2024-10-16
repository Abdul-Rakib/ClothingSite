import User from "../models/user.js";

export const register = async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const userCount = await User.countDocuments();
        const newUserId = `${userCount + 1}`;

        const user = new User({
            id: newUserId,
            name,
            email,
            mobile,
            password, // Assuming you're storing the password as is
        });

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user: { id: user.id, name: user.name, email: user.email },
        });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, name: user.name, email: user.email },
        });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
