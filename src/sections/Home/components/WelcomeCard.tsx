import { Card } from "@/components/retroui/Card";
import SearchBar from "@/components/SearchBar";
import { invoke } from "@tauri-apps/api/core";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function WelcomeCard() {
    const { t } = useTranslation('home');
    const [user, setUser] = useState('');

    useEffect(() => {
        invoke<string>("get_username").then(setUser).catch(() => setUser(''));
    }, []);

    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title>{t('welcome', { user })}</Card.Title>
                    <Card.Description></Card.Description>
                </Card.Header>
                <Card.Content>
                    <SearchBar icon={<Search />} />
                </Card.Content>
            </Card>
        </div>
    )
}