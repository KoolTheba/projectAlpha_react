import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 120,
      backgroundColor: 'white',
    }
  }));

export default function SelectMaterialUI() {
    const classes = useStyles()
    const [option, setOption] = useState('')

    const handleSelect = (e) => {
        setOption(e.target.value)
    }

    return(
        <>
        <h3>We're Select items!</h3>
        <p>I'm the selected one: {option}</p>
        <FormControl className={classes.formControl}>
            <Select
                value={option}
                onChange={handleSelect}
            >
            <MenuItem value={'apple'}>apple</MenuItem>
            <MenuItem value={'orange'}>orange</MenuItem>
            <MenuItem value={'chocolate'}>chocolate</MenuItem>
            </Select>
        </FormControl>
        </>
    )

}