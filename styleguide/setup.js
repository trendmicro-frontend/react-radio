import { Input } from '@trendmicro/react-form-control';
import { Container, Row, Col } from '@trendmicro/react-grid-system';
import FormGroup from './components/FormGroup';
import Text from './components/Text';
import { RadioButton, RadioGroup } from '../src';

global.Input = Input;
global.Container = Container;
global.Row = Row;
global.Col = Col;
global.FormGroup = FormGroup;
global.Text = Text;
global.RadioButton = RadioButton;
global.RadioGroup = RadioGroup;
