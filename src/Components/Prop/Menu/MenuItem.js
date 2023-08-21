import Button from '../../Button';

function MenuItem({ title, icon, className }) {
    return (
        <Button className={className} leftIcon={icon}>
            <span>{title}</span>
        </Button>
    );
}

export default MenuItem;
